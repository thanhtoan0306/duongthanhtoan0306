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
