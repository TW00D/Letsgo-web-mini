// import * as T from "./style";

// type TrendPostProps = {
//   data: {
//     word: string;
//     count: number;
//   };
// };

// const TrendPost: React.FC<TrendPostProps> = ({ data }) => {
//   return (
//     <>
//       <T.TrendPostContainer>
//         <T.TrendPostTitle>{data.word}</T.TrendPostTitle>
//         <T.TrendPostPoint>{data.count}</T.TrendPostPoint>
//       </T.TrendPostContainer>
//     </>
//   );
// };

// export default TrendPost;
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