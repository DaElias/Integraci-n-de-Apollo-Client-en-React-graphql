import React from "react";
import { useQuery } from "@apollo/client";
import PhotoCard from "../components/PhotoCard";
import { GET_PHOTO } from "../hoc/QuerisGraphql";
import { ContainerShowPhoto,PlaceholderOnlyPhoto } from "../components/Styles/componentStyled";


export const PhotoCardWithQuery = ({ id = 2 }) => {
  const { loading, data } = useQuery(GET_PHOTO, {
    variables: { id },
  });
  const photo = data ? data.photo : {}; // * assigantion
  return (
    <ContainerShowPhoto>
      {!loading ? <PhotoCard id={id} {...photo} /> : <PlaceholderOnlyPhoto />}
    </ContainerShowPhoto>
  );
};
