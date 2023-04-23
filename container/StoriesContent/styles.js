import styled from "styled-components";

export const StoriesPageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 70px 10px 10px 10px;
  /* background-color: red; */
  .stories-container {
    height: 500px;

    display: flex;
    .year-box {
      flex-basis: 10%;
      display: flex;
      justify-content: center;
      position: relative;

      .line {
        position: absolute;
        border: none;
        border-left: 1px dashed black;
        top: 50px;
        height: 100%;
        width: 1px;
      }
    }
    .stories-box {
      flex-basis: 90%;
      display: flex;
    }
  }
`;
