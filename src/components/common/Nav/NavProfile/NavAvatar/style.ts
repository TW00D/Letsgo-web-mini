import styled from "styled-components";

export const AvatarWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const NavTextWraper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  row-gap: 5px;
`;
export const NavName = styled.h2`
  color: black;
  font-family: "pretendard";
  font-weight: 600;
  font-size: 1.2em;
`;

export const NavSchoolname = styled.h5`
  color: black;
  font-family: "pretendard";
  font-size: 1em;
  font-weight: 400;
`;

export const NavIntroduction = styled.h5`
  color: #7f7f7f;
  font-family: "pretendard";
  font-size: 1em;
  font-weight: 400;
`;

//export const NavAvatarImg = styled.img``;
export const NavAvatarImg = styled.img`
  width: 75px;
  height: 75px;

  border-radius: 100%;
`;
export const NavAvatarWraper = styled.div`
  background: rgb(219, 0, 255);
  background: linear-gradient(
    139deg,
    rgba(219, 0, 255, 1) 0%,
    rgba(121, 69, 236, 1) 100%
  );

  border-radius: 100%;
  padding: 2px;
  width: 75px;
  height: 75px;
`;

export const NavAvatarTag = styled.div`
  position: relative;
  margin: 10px;
  border: 2px solid transparent;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(
      to right,
      rgba(219, 0, 255, 1) 0%,
      rgba(121, 69, 236, 1) 100%
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
  text-align: center;

  border-style: solid;
  border-radius: 50px;
`;

export const NavAvatarTagText = styled.div`
  color: black;
  font-family: "pretendard";
  font-weight: 500;
  font-size: 0.9em;
  margin: 5px 10px;
`;
