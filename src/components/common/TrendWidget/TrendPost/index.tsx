import * as T from "./style";

type TrendPostType = {
  rank: number;
  title: string;
  point: number;
};

type TrendPostProps = {
  data: TrendPostType;
};

const TrendPost = ({ data }: TrendPostProps) => {
  return (
    <>
      <T.TrendPostContainer>
        <T.TrendPostRank>{data.rank}</T.TrendPostRank>
        <T.TrendPostTitle>{data.title}</T.TrendPostTitle>
        <T.TrendPostPoint>{data.point}</T.TrendPostPoint>
      </T.TrendPostContainer>
    </>
  );
};

export default TrendPost;