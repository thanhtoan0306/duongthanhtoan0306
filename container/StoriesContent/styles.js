import styled from "styled-components";

export const StoriesPageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 70px 10px 10px 10px;
  display: flex;
  justify-content: center;
  /* background-color: red; */
  .stories-container {
    width: 70%;
    height: 200px;

    display: flex;
    .year-box {
      flex-basis: 30%;
      display: flex;
      gap: 20px;
      /* justify-content: center; */
      /* position: relative;   */

      .line {
        /* position: absolute; */
        border: none;
        border-left: 1px dashed black;
        /* top: 50px; */
        height: 100%;
        width: 1px;
      }
    }
    .stories-box {
      flex-basis: 70%;
      display: flex;
      margin: 20px;
      /* padding: 20px; */
      border: 1px solid gainsboro;
      border-radius: 20px;
      overflow: hidden;
      .image {
        position: relative;
        img {
          height: 100%;
          /* border-radius: 20px; */
          /* position: absolute;
          top: 0;
          left: 0; */
          /* width: ;
          height: 100%; */
          object-fit: cover;
        }
      }
      .content {
        padding: 10px;
      }
    }
  }
`;
