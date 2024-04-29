import styled from "styled-components";

export const ConfirmListContainer = styled.div`
  width: 100%;
  max-width: 40%;
  background-color: #fff;
  margin-top: 2%;

  .pagination {
    margin-top: 2rem;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1rem;

    > * {
      cursor: pointer;
    }
  }

  .pagination__link {
    transition: all 0.25s;
    padding: 0.2rem 0.6rem;
    border-radius: 0.3rem;
  }

  .pagination__link__active {
    background-color: #bbb;
    color: #fefefe;
  }
`;

export const ConfirmImageWrap = styled.div`
  display: flex;
  width: 100px;
  height: 65px;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
`;

export const ConfirmListItemContaienr = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  cursor: pointer;
  border-bottom: 1px solid #f1f1f3;
  position: relative;
  &:hover {
    background-color: #fff;
  }
`;

export const ConfirmListItem = styled.div`
  width: 10%;
  font-size: 16px;
  font-family: "Pretendard";
  font-weight: 400;
`;

export const ConfirmSubTitle = styled.div`
  font-size: 12px;
  font-family: "Pretnedard";
  font-weight: 200;
  color: #8d8ca0;

  margin-top: 10px;

  img {
    width: 10px;
  }
`;

export const RightTopInfo = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 12px;
  font-weight: 200;
  font-family: "Pretendard";
  color: #9f9faf;
`;

export const RightBottomInfo = styled.div`
  position: absolute;
  display: flex;
  bottom: 10px;
  right: 10px;
  font-size: 12px;

  span {
    font-size: 12px;
    font-weight: 200;
    font-family: "Pretendard";
    color: #000000;
    margin-right: 10%;
  }

  img {
    width: 25px;
  }
`;
