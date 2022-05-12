import React from "react";
import ListOfCategory from "../components/ListOfCategory";
import ListPhotoCard from "../components/ListPhotoCard";
import { Logo } from "../components/Logo";
import HelmetLayaout from "../components/Layaout/HelmetLayaout";
const Home = () => {
  return (
    <HelmetLayaout title="Home" content="Fotos Home" home>
      <Logo />
      <ListOfCategory />
      <ListPhotoCard />
    </HelmetLayaout>
  );
};

export default Home;
