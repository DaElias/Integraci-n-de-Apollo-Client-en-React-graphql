import React from "react";
import GetFavorites from "../components/ListOfFavs/index";
import HelmetLayaout from "../components/Layaout/HelmetLayaout";


const Favorites = () => {
  return (
    <HelmetLayaout title="Favorites"  content="Fotos favoritas" emoji="❤️">
      <GetFavorites />
    </HelmetLayaout>
  );
};

export default Favorites;
