import styled from "styled-components";

export const StoriesPageWrapper = styled.div`
  width: 100%;
  padding: 70px 10px 10px 10px;
  display: flex;
  justify-content: center;

  /* background-color: red; */
  .main-layout {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 70%;
    height: fit-content;
    overflow: hidden;
    .stories-container {
      width: 100%;
      height: 300px;

      display: flex;
      .year-box {
        /* flex-basis: 30%; */
        display: flex;
        gap: 20px;
        white-space: nowrap;

        .line {
          position: relative;
          border: none;
          border-left: 1px dashed black;
          height: 100%;
          width: 1px;
          margin-top: 10px;
          margin-left: 10px;
          .line-tip {
            position: absolute;
            font-weight: bold;
            top: -10px;
            left: -5px;
          }
        }
        .label-project {
          padding-top: 40px;
          height: 100%;
          .icon-skill {
            margin-top: 10px;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            grid-auto-rows: 30%;
            .js_skill {
              padding: 20px;
              /* max-height: 110px; */
              width: 100px;
              height: 100px;
              overflow: hidden;

              .logo {
                border-radius: 10px;
                width: 100%;

                object-fit: contain;
              }
            }
          }
        }
      }
      .stories-box {
        /* flex-basis: 70%; */

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
            object-fit: cover;
          }
        }
        .content {
          text-overflow: ellipsis;
          padding: 10px;
        }
      }
    }
  }
`;
