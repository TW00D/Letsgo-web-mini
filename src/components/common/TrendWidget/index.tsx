import React, { useState, useEffect } from "react";
import TrendPost from "./TrendPost";
import * as T from "./style";
import { APPLY_ITEMS } from "./constants";
import { useRankQuery, RankType } from "../../../hooks/Trends/useTrendChart";

const TrendWidget: React.FC = () => {
  const { data, isLoading, isError, refetch } = useRankQuery();
  const [section, setSection] = useState("1위~10위");

  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 5000);

    return () => clearInterval(interval);
  }, [refetch]);

  return (
    <T.TrendWidgetContainer>
      <T.TrendWidgetTitle>실시간 트렌드 차트</T.TrendWidgetTitle>
      <T.TrendButtonWraper>
        {APPLY_ITEMS.map((item) => (
          <T.TrendActiveButton
            key={`trendsTitleItem ${item}`}
            isSelect={section === item}
            onClick={() => setSection(item)}
          >
            <span>{item}</span>
          </T.TrendActiveButton>
        ))}
      </T.TrendButtonWraper>
      <T.TrendPostWraper>
        {data?.map((item: RankType, index: number) => (
          <TrendPost
            key={index}
            data={{
              rank: index + 1,
              title: item.title,
              point: item.point,
            }}
          />
        ))}
      </T.TrendPostWraper>
    </T.TrendWidgetContainer>
  );
};

export default TrendWidget;
