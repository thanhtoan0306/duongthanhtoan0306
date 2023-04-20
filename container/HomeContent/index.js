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
  /* font-size: 99px; */
  .content-container {
    flex-basis: 55%;
    width: 55%;
    display: flex;
    justify-content: center;
    align-items: center;
    .content {
      width: fit-content;
      line-height: 2;
      padding: 10px;
      .myname {
        width: fit-content;
        font-size: 40px;
        font-weight: 700;
        background-color: black;
        color: white;
        padding: 10px 20px;
        transform: skew(-20deg);
      }
      .job {
        font-size: 30px;
      }
    }
    @media (max-width: 800px) {
      flex-basis: 100%; // 100% width when viewport is smaller than $breakpoint
    }
  }
  .image-box {
    width: 45%;
    min-width: 500px;
    flex-basis: 45%;
    display: flex;
    justify-content: flex-end;
    align-items: end;
    img {
      /* height: 50%; */
      width: 100%;
      /* max-height: 100%; */
      /* max-width: 400px; */
    }
    @media (max-width: 800px) {
      flex-basis: 100%; // 100% width when viewport is smaller than $breakpoint
    }
    /* position: relative; */
  }
`;

const HomeContent = () => {
  const myIntro = `Hi there, my name is Duong Thanh Toan. I'm 25 years old and I'm a web developer`;
  return (
    <HomePageWrapper>
      <div className="content-container">
        <div className="content">
          <div className="myname">HI, I'M A WEB DEVELOPER</div>
          <div className="job">My name is Duong Thanh Toan</div>
          <div>"I have 3 years of experience in coding, with a focus on frontend web development as my major."</div>
          <div className="cv-button">
            <button>📄 MY CV</button>
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
