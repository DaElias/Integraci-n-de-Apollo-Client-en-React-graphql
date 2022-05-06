import React from "react";
import ListOfCategory from "../components/ListOfCategory";
import ListPhotoCard from "../components/ListPhotoCard";
import {Logo} from "../components/Logo";
import { GlobalStyle } from "../components/Styles/GlobalStyle";

const Home = () => {
  return (
    <>
      <Logo />
      <GlobalStyle />
      <ListOfCategory />
      <ListPhotoCard />
    </>
  );
};

export default Home;
