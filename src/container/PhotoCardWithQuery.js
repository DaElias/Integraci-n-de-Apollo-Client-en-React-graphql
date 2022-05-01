import React from "react";
import { useQuery } from "@apollo/client";
import PhotoCard from "../components/PhotoCard";
import { GET_PHOTO } from "../hoc/QuerisGraphql";

export const PhotoCardWithQuery = ({ id = 2 }) => {
  const { loading, data } = useQuery(GET_PHOTO, {
    variables: { id },
  });
  let photo = {};

  //* validate!!
  if (data) {
    photo = data.photo;
  }

  return (
    <>{!loading ? <PhotoCard id={id} {...photo} /> : <h1>Loading...</h1>}</>
  );
};
