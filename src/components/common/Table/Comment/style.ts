import styled from "styled-components";

export const CommentContainer = styled.div`
  width: 100%;
  min-width: 40%;
  background-color: #fff;
  margin-top: 2%;
  padding: 4%;
  box-sizing: border-box;
`;

export const CommentHeaderWraper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 5px;
  margin-bottom: 2%;
`;

export const CommentHeaderTitle = styled.h5`
  font-family: "pretendard";
  font-size: 1em;
`;

export const CommentNumber = styled.h5`
  font-family: "pretendard";
  font-size: 1em;
  background-image: linear-gradient(to right, #db00ff, #455cec);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin-right: auto;
`;

export const CommentRestart = styled.h5`
  font-family: "pretendard";
  font-size: 0.8em;
  background-image: linear-gradient(to right, #db00ff, #455cec);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-weight: 500;
`;

export const CommentInputWraper = styled.div`
  width: 100%;
  height: 8%;
  background-color: #f8f8f8;
  border-radius: 10px;
  display: flex;
  box-sizing: border-box;
  column-gap: 2%;
  padding: 1%;
  margin-top: 1%;
`;

export const CommentInput = styled.input`
  width: 100%;
  background-color: #f8f8f8;
  border: none;
  outline: none;
  font-family: "pretendard";
  font-size: 1em;
  ::placeholder {
    color: 9F9FAF;
  }
`;

export const CommentIcon = styled.img`
  width: 3%;
`;
export const CommentSendIcon = styled.img`
  width: 3%;
`;
