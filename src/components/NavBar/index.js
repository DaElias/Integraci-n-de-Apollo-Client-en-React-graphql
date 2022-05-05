import React, { useState } from "react";
import { BiHomeAlt, BiHeartCircle, BiGroup } from "react-icons/bi";
import { Link, Nav } from "./styles";

const initialState = {
  home: true,
  fav: false,
  user: false,
};
const NavBar = ({ size = "32px" }) => {
  //   const [{ fav, home, user }, setState] = useState(initialState);


  return (
    <Nav>
      <Link to="/" >
        <BiHomeAlt
          size={size}
          //   color={home ? "black" : "grey"}
          //   onClick={() => {
          // setState({ home: true, fav: false, user: false });
          //   }}
        />
      </Link>
      <Link to="/pet/photo/12">
        <BiHeartCircle
          size={size}
          //   color={fav ? "black" : "grey"}
          //   onClick={() => {
          // setState({ home: false, fav: true, user: false });
          //   }}
        />
      </Link>
      <Link to="/pet/photo/18">
        <BiGroup
          size={size}
          //   color={user ? "black" : "grey"}
          //   onClick={() => {
          // setState({ home: false, fav: false, user: true });
          //   }}
        />
      </Link>
    </Nav>
  );
};

export default NavBar;
