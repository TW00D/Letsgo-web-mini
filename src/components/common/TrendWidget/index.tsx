// import React, { useState, useEffect } from "react";
// import TrendPost from "./TrendPost";
// import * as T from "./style";
// import { APPLY_ITEMS } from "./constants";
// import { useRankQuery, RankType } from "../../../hooks/Trends/useTrendChart";

// const TrendWidget: React.FC = () => {
//   const { data, isLoading, isError, refetch } = useRankQuery();
//   const [section, setSection] = useState("1위~10위");

//   useEffect(() => {
//     const interval = setInterval(() => {
//       refetch();
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [refetch]);

//   // if (isLoading) {
//   //   return <div>Loading...</div>;
//   // }

//   // if (isError) {
//   //   return <div>Error occurred while fetching data</div>;
//   // }

//   const trendData = Array.isArray(data) ? data : [];

//   return (
//     <T.TrendWidgetContainer>
//       <T.TrendWidgetTitle>실시간 트렌드 차트</T.TrendWidgetTitle>
//       <T.TrendButtonWraper>
//         {APPLY_ITEMS.map((item) => (
//           <T.TrendActiveButton
//             key={`trendsTitleItem ${item}`}
//             isSelect={section === item}
//             onClick={() => setSection(item)}
//           >
//             <span>{item}</span>
//           </T.TrendActiveButton>
//         ))}
//       </T.TrendButtonWraper>
//       <T.TrendPostWraper>
//       {trendData.map((item: RankType, index: number) => (
//         item.data.map((wordItem: { word: string; count: number }, wordIndex: number) => (
//           <TrendPost
//             key={wordIndex}
//             data={{
//               word: wordItem.word,
//               count: wordItem.count,
//             }}
//           />
//         ))
//       ))}
//     </T.TrendPostWraper>
//     </T.TrendWidgetContainer>
//   );
// };

// export default TrendWidget;
import TrendPost from "./TrendPost";
import * as T from "./style";

const dummy = [
  {
    rank: 1,
    title: "자",
    point: 1000,
  },
  {
    rank: 2,
    title: "현이",
    point: 1000,
  },
  {
    rank: 3,
    title: "그냥",
    point: 1000,
  },
  {
    rank: 4,
    title: "도르트문트",
    point: 1000,
  },
  {
    rank: 5,
    title: "그",
    point: 1000,
  },
  {
    rank: 6,
    title: "해",
    point: 1000,
  },
  {
    rank: 7,
    title: "공부",
    point: 1000,
  },
  {
    rank: 8,
    title: "어제",
    point: 1000,
  },
  {
    rank: 9,
    title: "저녁",
    point: 1000,
  },
  {
    rank: 10,
    title: "자전거",
    point: 1000,
  },
];
const TrendWidget = () => {
  return (
    <>
      <T.TrendWidgetContainer>
        <T.TrendWidgetTitle>실시간 트렌드 차트</T.TrendWidgetTitle>
        <T.TrendButtonWraper>
          <T.TrendActiveButton>1~10위</T.TrendActiveButton>
          <T.TrendDisableButton>11~20위</T.TrendDisableButton>
        </T.TrendButtonWraper>
        <T.TrendPostWraper>
          {dummy.map((data) => (
            <TrendPost data={data}></TrendPost>
          ))}
        </T.TrendPostWraper>
      </T.TrendWidgetContainer>
    </>
  );
};

export default TrendWidget;
