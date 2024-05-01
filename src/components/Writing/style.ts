import styled from "styled-components";

export const WritingContainer = styled.form`
  display: flex;
  width: 40%;
  min-width: 500px;
  height: 65vh;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: #fff;
  margin-top: -1.5%;
  padding: 1%;
  box-sizing: border-box;
  flex-direction: column; 
  
`;

export const WritingTitleInput = styled.input`
  height: 6%;
  outline: none;
  border: none;
  border: 1px solid #bdbdc8;
  padding-left: 13px;
  font-family: "pretendard";
  font-size: 0.8em;
  margin-bottom: 2%;

  &::placeholder {
    font-size: 1em;
    font-family: "Pretendard";
    color: #a6a6a6;
    font-weight: 200;
  }
`;

export const WritingContentInput = styled.textarea`
  height: 60%;
  outline: none;
  border: none;
  border: 1px solid #bdbdc8;
  padding-left: 13px;
  font-family: "pretendard";
  font-size: 0.8em;
  padding: 2%;

  &::placeholder {
    font-size: 1em;
    font-family: "Pretendard";
    color: #a6a6a6;
    font-weight: 200;
  }
`;

export const ImageButton = styled.button`
  height: 10%;
`;

export const WritingButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const WritingCancelButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 105px;
  height: 37px;
  border-radius: 5px;
  border: none;
  background-color: #F1F1F3;

  margin-right: 1%;
  margin-top: 3%;

  cursor: pointer;
  
  span {
    font-size: 14px;
    font-weight: 00;
    font-family: 'Pretendard';
    color: #9F9FAF;
  }
`

export const WritingPostButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 105px;
  height: 37px;
  border: none;
  border-radius: 5px;
  background-color: #db00ff;

  margin-top: 3%;
  
  cursor: pointer;

  span {
    font-size: 14px;
    font-weight: 00;
    font-family: 'Pretendard';
    color: #fff
  }
`