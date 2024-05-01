// import styled, { css } from "styled-components";

// export const TrendWidgetContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   background-color: white;
//   width: 280px;
//   height: 360px;
//   border-radius: 20px;
//   z-index: 999;
//   box-shadow: 0px 0px 18px 6px rgba(0, 0, 0, 0.01);
//   padding: 20px;
//   box-sizing: border-box;
//   top: 300px;
//   position: sticky;
// `;

// export const TrendWidgetTitle = styled.h2`
//   background-image: linear-gradient(to right, #db00ff, #455cec);
//   background-clip: text;
//   -webkit-background-clip: text;
//   color: transparent;
//   font-size: 1.2em;
//   font-weight: 700;
//   font-family: "Pretendard";
//   letter-spacing: -1px;
// `;

// export const TrendButtonWraper = styled.div`
//   margin-top: 3%;
// `;

// export const TrendActiveButton = styled.button<{ isSelect: boolean }>`
//   width: 120px;
//   height: 30px;
//   font-family: "Pretendard";
//   background: ${(props) =>
//     props.isSelect
//       ? "linear-gradient(#fff, #fff) padding-box, linear-gradient(60deg, #455cec, #db00ff) border-box"
//       : "linear-gradient(#fff, #fff) padding-box, linear-gradient(60deg, #9f9faf, #9f9faf) border-box"};
//   color: ${(props) => (props.isSelect ? "#313149" : "#9f9faf")};
//   border: 2px solid transparent;
//   display: inline-block;
//   cursor: pointer;

//   &:not(:first-child) {
//     border-top-left-radius: 0;
//   }
// `;

// export const TrendDisableButton = styled.button`
//   width: 120px;
//   height: 30px;
//   font-family: "Pretendard";
//   border-color: #ecebee;
//   color: #9f9faf;
//   border-style: solid;

//   cursor: pointer;
// `;

// export const TrendPostWraper = styled.div`
//   margin-top: 3%;
//   border-top: 1px solid #f1f1f3;
// `;
import styled from "styled-components";

export const TrendWidgetContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 280px;
  height: 360px;
  border-radius: 20px;
  z-index: 999;
  box-shadow: 0px 0px 18px 6px rgba(0, 0, 0, 0.01);
  padding: 20px;
  box-sizing: border-box;
  top: 300px;
  position: sticky;
`;

export const TrendWidgetTitle = styled.h2`
  background-image: linear-gradient(to right, #db00ff, #455cec);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 1.2em;
  font-weight: 700;
  font-family: "Pretendard";
  letter-spacing: -1px;
`;

export const TrendButtonWraper = styled.div`
  margin-top: 3%;
`;
export const TrendActiveButton = styled.button`
  width: 120px;
  height: 30px;
  font-family: "Pretendard";
  background:
    linear-gradient(#fff, #fff) padding-box,
    linear-gradient(60deg, #455cec, #db00ff) border-box;
  color: #313149;
  border: 2px solid transparent;
  display: inline-block;
  border-top-left-radius: 10px;
`;

export const TrendDisableButton = styled.button`
  width: 120px;
  height: 30px;
  font-family: "Pretendard";
  border-color: #ecebee;
  color: #9f9faf;
  border-style: solid;
`;

export const TrendPostWraper = styled.div`
  margin-top: 3%;
  border-top: 1px solid #f1f1f3;
`;