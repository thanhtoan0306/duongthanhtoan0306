import React from "react";
import { StoriesPageWrapper } from "./styles";

const StoriesContent = () => {
  return (
    <StoriesPageWrapper>
      <div className="stories-container">
        <div className="year-box">
          2023
          <div className="line"></div>
        </div>
        <div className="stories-box">
          <div className="image">
            <img height={200} src="/images/pt11.png" />
          </div>
          <div className="content">Bubbles Spa Websites</div>
        </div>
      </div>
    </StoriesPageWrapper>
  );
};

export default StoriesContent;
