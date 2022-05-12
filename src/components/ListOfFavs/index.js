import React from "react";
import { useQuery } from "@apollo/client";
import { GET_FAVORITES } from "../../hoc/QuerisGraphql";
import { Grid, Image, Link } from "./styles";
import IngPlaceholder from "../../assets/img/placeholder.jpeg";
const GetFavorites = () => {
  const { loading, data, error } = useQuery(GET_FAVORITES, {
    //* fetchPolicy: "network-only" => para actualizarse siempre va a mirar la api, no el cache
    fetchPolicy: "network-only",
  });
  const favs = data ? data.favs : [];

  if (error) {
    console.log(error);
    window.location.replace("/");
    // return (
    //   <div
    //     style={{
    //       display: "flex",
    //       justifyContent: "center",
    //       alignItems: "center",
    //       textAlign: "center",
    //     }}
    //   >
    //     <h2>Ocurrio un error inesperado :C</h2>
    //   </div>
    // );
  }

  return loading ? (
    <Grid>
      <Link to={`/favs`}>
        <Image loading={true} src={IngPlaceholder} />
      </Link>
      <Link to={`/favs`}>
        <Image loading={true} src={IngPlaceholder} />
      </Link>
      <Link to={`/favs`}>
        <Image loading={true} src={IngPlaceholder} />
      </Link>
    </Grid>
  ) : (
    <Grid>
      {favs.map((fav) => (
        <Link key={fav.id} to={`/pet/photo/${fav.id}`}>
          <Image src={fav.src} />
        </Link>
      ))}
    </Grid>
  );
};

export default GetFavorites;
