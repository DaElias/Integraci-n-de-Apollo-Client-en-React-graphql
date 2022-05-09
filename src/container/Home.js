import React from "react";
import ListOfCategory from "../components/ListOfCategory";
import ListPhotoCard from "../components/ListPhotoCard";
import {Logo} from "../components/Logo";

const Home = () => {
  return (
    <>
      <Logo />
      <ListOfCategory />
      <ListPhotoCard />
    </>
  );
};

export default Home;
