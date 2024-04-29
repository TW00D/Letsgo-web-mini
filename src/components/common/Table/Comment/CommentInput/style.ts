import styled from "styled-components";

export const CommentContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

export const CommentInputWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CommentFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

export const RefreshButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  background-image: linear-gradient(to right, #db00ff, #7945ec);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 14px;
  font-weight: 400;
  font-family: "Pretendard";
  text-decoration: underline;
  margin-right: 1%;
`;

export const CommentTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  font-family: "Pretendard";
  margin: 2% 1%;
  color: #000;
`;

export const CommentCount = styled.span`
  color: transparent;
  background-image: linear-gradient(
    to right,
    #db00ff,
    #7945ec
  ); /* 그라디언트 설정 */
  -webkit-background-clip: text;
  background-clip: text;
`;

export const CommentInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #f8f8f8;
  border-radius: 10px;
  margin-bottom: 2%;
`;

export const CommentInputWraper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #f1f1f3;
  padding-left: 10px;
  color: #000;
  cursor: text;

  span {
    font-size: 14px;
    font-weight: 400;
    font-family: "Pretendard";
    color: #9f9faf;
    margin: 0 2%;
  }

  input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    font-family: "Pretendard";
    background-color: transparent;
    margin: 0 2%;
  }
`;

export const CommentInputIcon = styled.img`
  width: 17px;
  margin-left: 1%;

  cursor: pointer;
`;

export const CommentSubmit = styled.img`
  cursor: pointer;
`;

export const CommentButton = styled.button`
  border: none;
  background-color: transparent;
  margin-left: auto;
  cursor: pointer;
  margin-right: 2%;
  image {
    width: 25px;
    height: 25px;
    margin-right: 2%;
  }
`;
