import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import PhotoCard from "../PhotoCard";
import { useQuery } from "@apollo/client";
import { GET_PHOTOS } from "../../hoc/QuerisGraphql";
import {
  PlaceholderListCard,
  PlaceHolderButtom,
} from "../Styles/componentStyled";
const ListPhotoCard = () => {
  const { categoryId = 1 } = useParams();
  const { loading, data } = useQuery(GET_PHOTOS, {
    variables: { categoryId },
  });
  const photos = data ? data.photos : [];

  return (
    <ul>
      {!loading ? (
        photos.map((id, key) => <PhotoCard key={key} {...id} />)
      ) : (
        <Fragment>
          <PlaceholderListCard />
          <PlaceHolderButtom />
        </Fragment>
      )}
    </ul>
  );
};

export default ListPhotoCard;
