import React from "react";
import styled from "styled-components";

const HomePageWrapper = styled.div`
width: 100%;
height: 100vh;
  padding: 10px;
  position: relative;
  img {
    width: 50vw;
    position: absolute; /* đặt hình ảnh thành absolute để nó có thể đặt vị trí tương đối với phần tử cha */
    bottom: 0; /* căn chỉnh hình ảnh đến phía dưới của phần tử cha */
    right: 0; /* căn chỉnh hình ảnh đến phía bên phải của phần tử cha */
  }
`;

const HomeContent = () => {
  const myIntro = `Hi there, my name is Duong Thanh Toan. I'm 25 years old and I'm a web developer`;
  return (
    <HomePageWrapper>
      <div>{myIntro}</div>
      <div>3 years in programming</div>
      <div>I have not finish my page yet</div>
      <img src="/images/pt11.png" />
    </HomePageWrapper>
  );
};

export default HomeContent;
