import styled from "styled-components";

export const HomePageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 10px;
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
      padding: 10px;
      .myname {
        width: fit-content;
        white-space: nowrap;
        font-size: 40px;
        font-weight: 700;
        background-color: black;
        color: white;
        padding: 10px 20px;
        transform: skew(-20deg);
        @media (max-width: 800px) {
          font-size: 30px;
        }
        @media (max-width: 420px) {
          font-size: 20px;
        }
      }
      .job {
        margin-top: 20px;
        font-size: 30px;
      }
      .major {
        margin-top: 10px;
      }
      .cv-button > div {
        margin-top: 20px;
        padding: 5px 10px;
        border: 1px gainsboro solid;
        border-radius: 5px;
        width: fit-content;
        display: flex;
        justify-content: space-between;
        gap: 10px;
        align-items: center;
        height: 44px;

        cursor: pointer;
        .prefix {
          /* border: 1px solid gainsboro;
          border-radius: 50%; */
          /* width: fit-content; */
          /* padding: 0 10px; */
          /* background-color: black; */
        }
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
      width: 100%;
    }
    @media (max-width: 800px) {
      flex-basis: 100%; // 100% width when viewport is smaller than $breakpoint
    }
  }
`;
