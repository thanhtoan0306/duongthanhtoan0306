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
        <span className="page-route">
          <a className="active" href="/">Home</a>
        </span>
        <span className="page-route">
          <a href="#1">Projects</a>
        </span>
        <span className="page-route">
          <a href="#2">Stories</a>
        </span>
        <span className="page-route">
          <a href="#3">About</a>
        </span>
      </div>
    </NavBarWrapper>
  );
};

export default NavBar;
