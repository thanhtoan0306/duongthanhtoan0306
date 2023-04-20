import React from "react";
import { HomePageWrapper } from "./styles";
import { DownloadIcon } from "@/public/custom-icons/custom-icons";

const HomeContent = () => {
  return (
    <HomePageWrapper>
      <div className="content-container">
        <div className="content">
          <div className="myname">HI, I'M A WEB DEVELOPER</div>
          <div className="job">My name is Duong Thanh Toan</div>
          <div className="major">"I have 3 years of experience in coding, with a focus on frontend web development as my major."</div>
          <div className="cv-button">
            <div>
              <span className="prefix">
                <DownloadIcon />
              </span>
              <span className="button-label"> MY CV</span>
            </div>
          </div>
        </div>
      </div>
      <div className="image-box">
        <img src="/images/pt11.png" />
      </div>
    </HomePageWrapper>
  );
};

export default HomeContent;
