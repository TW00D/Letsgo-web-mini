import { AxiosError } from "axios";
import { useQuery } from "react-query";
import instance from "../../utils/axios";

export interface RankType {
  data: {
    map(arg0: (wordItem: { word: string; count: number; }, wordIndex: number) => import("react/jsx-runtime").JSX.Element): any;
    word: string;
    count: number;
  };
}

export const useRankQuery = () => {
  return useQuery<RankType[], AxiosError>(
    "rankList",
    async () => {
      const response = await instance.get<RankType[]>(
        "http://49.50.175.242:8082/v1/api/rank"
      );
      console.log("data", response.data);

      return response.data;
    },
    {
      cacheTime: 300000,
    }
  );
};
