import React, {  useMemo } from "react";
import ListOfCategory from "../components/ListOfCategory";
import ListPhotoCard from "../components/ListPhotoCard";
import { Logo } from "../components/Logo";
import HelmetLayaout from "../components/Layaout/HelmetLayaout";

const HomePage = () => {
  return (
    <HelmetLayaout title="Home" content="Fotos Home" home>
      <Logo />
      <ListOfCategory />
      <ListPhotoCard />
    </HelmetLayaout>
  );
};

// eslint-disable-next-line react-hooks/exhaustive-deps
const Home = () => useMemo(HomePage);

export default Home;
