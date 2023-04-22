import styled from "styled-components";

export const NavBarWrapper = styled.div`
  position: absolute;
  z-index: 999;
  top: 0;
  height: 30%;
  width: 100%;
  max-height: 70px;
  display: flex;
  justify-content: space-between;
  background: white;
  .icon-container {
    padding: 10px;
    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    .icon-content-box {
      padding: 5px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      /* border: 1px solid gainsboro; */
      /* border-radius: 30px; */
      .content {
        font-size: 30px;
        font-weight: 600;
      }
    }
  }
  .page-container {
    margin-right: 30px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;
