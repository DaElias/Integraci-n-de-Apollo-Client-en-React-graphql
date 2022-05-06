import React from "react";
import { useQuery } from "@apollo/client";
import PhotoCard from "../components/PhotoCard";
import { GET_PHOTO } from "../hoc/QuerisGraphql";
import { PlaceholderOnlyPhoto } from "../components/Styles/componentStyled";
import { useParams } from "react-router-dom";
import {Logo} from "../components/Logo";

export const DetailPhoto = () => {
  const { photoId } = useParams();
  const { loading, data } = useQuery(GET_PHOTO, {
    variables: { id: photoId },
  });
  const photo = data ? data.photo : {}; // * assigantion
  return (
    <>
      <Logo />
      {!loading ? <PhotoCard {...photo} /> : <PlaceholderOnlyPhoto />}
    </>
  );
};
