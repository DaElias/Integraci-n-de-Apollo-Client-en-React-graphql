import React from "react";
import { useQuery } from "@apollo/client";
import PhotoCard from "../components/PhotoCard";
import { GET_PHOTO } from "../hoc/QuerisGraphql";
import { PlaceholderOnlyPhoto } from "../components/Styles/componentStyled";
import { useParams } from "react-router-dom";
import { Logo } from "../components/Logo";
import HelmetLayaout from "../components/Layaout/HelmetLayaout";

export const DetailPhoto = () => {
  const { photoId } = useParams();
  const { loading, data } = useQuery(GET_PHOTO, {
    variables: { id: photoId },
  });
  const photo = data ? data.photo : {}; // * assigantion
  return (
    <HelmetLayaout
      title="Photo"
      content="Puedes encontrar las mejores fotos de tus mascotas!!"
      home
    >
      <Logo />
      {!loading ? <PhotoCard {...photo} /> : <PlaceholderOnlyPhoto />}
    </HelmetLayaout>
  );
};
