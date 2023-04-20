import React from "react";
import styled from "styled-components";

const HomePageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 10px;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .content-container {
    flex-basis: 55%;
    width: 55%;
    display: flex;
    justify-content: center;
    align-items: center;
    .content {
      width: fit-content;
    }
    @media (max-width: 800px) {
      flex-basis: 100%; // 100% width when viewport is smaller than $breakpoint
    }
  }
  .image-box {
    width: 45%;
    flex-basis: 45%;
    display: flex;
    justify-content: flex-end;
    align-items: end;
    @media (max-width: 800px) {
      flex-basis: 100%; // 100% width when viewport is smaller than $breakpoint
    }
    /* position: relative; */
  }
  img {
    /* height: 50%; */
    width: 100%;
    /* max-height: 100%; */
    /* max-width: 400px; */
  }
`;

const HomeContent = () => {
  const myIntro = `Hi there, my name is Duong Thanh Toan. I'm 25 years old and I'm a web developer`;
  return (
    <HomePageWrapper>
      <div className="content-container">
        <div className="contain">
          <h1>I'm a web developer</h1>
          <div>{myIntro}</div>
          <div>3 years in programming</div>
          <div>I have not finish my page yet</div>
        </div>
      </div>
      <div className="image-box">
        <img src="/images/pt11.png" />
      </div>
    </HomePageWrapper>
  );
};

export default HomeContent;
