import styled from "styled-components";

export const CommentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 2%;
  box-sizing: border-box;
  column-gap: 2%;
  background-color: white;
`;

export const CommentProfile = styled.img`
  width: 30px;
  height: 30px;
`;

export const CommentContentWraper = styled.div`
  display: flex;
  row-gap: 5px;
  flex-direction: column;
  padding-top: 2px;
`;

export const CommentTitle = styled.h2`
  font-family: "pretendard";
  color: #8d8ca0;
  font-size: 0.9em;
  font-weight: 500;
`;
export const CommentPostTime = styled.h2`
  width: 200px;
  font-family: "pretendard";
  color: #4d4d53;
  font-weight: 500;
  font-size: 0.7em;
`;

export const CommentContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 2%;
  align-items: center;
`;
export const CommentContent = styled.h2`
  font-family: "pretendard";
  color: #4d4d53;
  font-size: 0.8em;
  font-weight: 500;
`;

export const CommentBottomWraper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1%;
  column-gap: 4px;
`;

export const CommentBottomIcon = styled.img`
  width: 16px;
`;

export const CommentIconWraper = styled.div`
  display: flex;
  flex-direction: row;

  column-gap: 2px;
`;

export const CommentBottomText = styled.h2`
  font-family: "pretendard";
  color: #4d4d53;
  font-size: 0.8em;
  font-weight: 400;
`;
