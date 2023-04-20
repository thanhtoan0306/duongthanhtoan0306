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
  .content {
    flex-basis: 55%;
    width: 55%;
    @media (max-width: 600px) {
      flex-basis: 100%; // 100% width when viewport is smaller than $breakpoint
    }
  }
  .image-box {
    width: 45%;
    flex-basis: 45%;
    @media (max-width: 600px) {
      flex-basis: 100%; // 100% width when viewport is smaller than $breakpoint
    }
    position: relative;
  }
  img {
    width: 90%;
    /* max-width: 400px; */
    position: absolute; /* đặt hình ảnh thành absolute để nó có thể đặt vị trí tương đối với phần tử cha */
    bottom: 0; /* căn chỉnh hình ảnh đến phía dưới của phần tử cha */
    right: 0; /* căn chỉnh hình ảnh đến phía bên phải của phần tử cha */
  }
`;

const HomeContent = () => {
  const myIntro = `Hi there, my name is Duong Thanh Toan. I'm 25 years old and I'm a web developer`;
  return (
    <HomePageWrapper>
      <div className="content">
        <div>{myIntro}</div>
        <div>3 years in programming</div>
        <div>I have not finish my page yet</div>
      </div>
      <div className="image-box">
        <img src="/images/pt11.png" />
      </div>
    </HomePageWrapper>
  );
};

export default HomeContent;
