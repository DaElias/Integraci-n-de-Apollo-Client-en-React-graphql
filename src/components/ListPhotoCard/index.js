import React from "react";
import PhotoCard from "../PhotoCard";
import { useQuery } from "@apollo/client";
import { GET_PHOTOS } from "../../hoc/withPhotos";

const ListPhotoCard = () => {
  const { loading, data } = useQuery(GET_PHOTOS, {
    variables: { categoryId: 2 },
  });
  return (
    <ul>
      {!loading ? (
        data.photos.map((id, key) => <PhotoCard key={key} {...id} />)
      ) : (
        <h3>Loading ...</h3>
      )}
    </ul>
  );
};

export default ListPhotoCard;
