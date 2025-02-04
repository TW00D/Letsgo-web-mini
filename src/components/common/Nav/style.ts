import styled from "styled-components";

export const NavContainer = styled.div`
  position: relative;
  position: fixed;
  top: 0;
  left: 0;

  width: 300px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  row-gap: 30px;
  align-items: center;

  background-color: #fff;
  color: #f6f6f6;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const NavTopWrap = styled.div`
  width: 80%;
  height: 50px;
  display: flex;
  justify-content: flex-start;

  margin-top: 10px;
  text-align: center;
`;

export const NavTitle = styled.img`
  cursor: pointer;
  margin-right: 65px;
  object-fit: scale-down;
`;

export const NavMidWrap = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;

  margin-top: 10px;
  row-gap: 25px;
  font-size: 16px;
  font-weight: 400;
  font-family: "Pretendard";
  color: #706f88;

  @media screen and (max-width: 768px) {
    padding-left: 20px;
  }
`;

export const NavCategoryBox = styled.div<{
  isMatch: boolean;
}>`
  display: flex;
  align-items: center;
  color: ${({ theme, isMatch }) => (isMatch ? theme.contrast : "#bdbdc8")};

  font-size: 14px;
  column-gap: 14px;
  cursor: pointer;

  span {
    margin-left: -11%;
  }
`;

export const SubCategoryBox = styled.div<{
  isMatch: boolean;
}>`
  display: flex;
  align-items: center;
  color: ${({ theme, isMatch }) => (isMatch ? theme.contrast : "#bdbdc8")};
  // background-color: ${({ theme, isMatch }) => (isMatch ? "#FBFBFB" : theme.contrast )};

  margin-left: 11%;
  font-size: 14px;
  cursor: pointer;
`;
