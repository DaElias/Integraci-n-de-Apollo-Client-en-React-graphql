import React from "react";
import { BiHomeAlt, BiHeartCircle, BiGroup } from "react-icons/bi";
import { Link, Nav } from "./styles";

const NavBar = ({ size = "32px" }) => {
  return (
    <Nav>
      <Link to="/">
        <BiHomeAlt size={size} />
      </Link>
      <Link to="/favs">
        <BiHeartCircle size={size} />
      </Link>
      <Link to="/user">
        <BiGroup size={size} />
      </Link>
    </Nav>
  );
};

export default NavBar;
