import React from "react";
import { NavBarWrapper } from "./styles";
import { TSignIcon } from "@/public/custom-icons/custom-icons";

const NavBar = () => {
  return (
    <NavBarWrapper>
      <div className="icon-container">
        <div className="icon-content-box">
          <TSignIcon with="40" />
          <div className="content">DuongTT</div>
        </div>
      </div>
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
