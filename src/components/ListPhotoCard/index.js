import React from "react";
import PhotoCard from "../PhotoCard";
import { useQuery } from "@apollo/client";
import { GET_PHOTOS } from "../../hoc/QuerisGraphql";
import { TextSkeleton } from "light-skeleton";
import { ContenedorTextSkeleton } from "../Styles/componentStyled";
const ListPhotoCard = () => {
  const { loading, data } = useQuery(GET_PHOTOS, {
    variables: { categoryId: 2 },
  });

  return (
    <ul>
      {!loading ? (
        data.photos.map((id, key) => <PhotoCard key={key} {...id} />)
      ) : (
        <ContenedorTextSkeleton>
          <TextSkeleton
            style={{ height: "390px", width: "390px", gridArea: "header" }}
          />
          <TextSkeleton
            style={{
              borderRadius: "50px",
              height: "50px",
              width: "50px",
              gridArea: "main",
            }}
          />
        </ContenedorTextSkeleton>
      )}
    </ul>
  );
};

export default ListPhotoCard;
