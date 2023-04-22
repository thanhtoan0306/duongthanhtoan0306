import React from "react";
import { NavBarWrapper } from "./styles";

const NavBar = () => {
  return (
    <NavBarWrapper>
      <div className="icon-container">icon</div>
      <div className="page-container">
        <span>Home</span>
        <span>Projects</span>
        <span>Stories</span>
        <span>About</span>
      </div>
    </NavBarWrapper>
  );
};

export default NavBar;
