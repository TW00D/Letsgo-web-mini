import { AxiosError } from "axios";
import { useQuery } from "react-query";
import instance from "../../utils/axios";

export interface RankType {
  title: string;
  point: number;
  code: string;
  message: string;
  data: string[];
}

export const useRankQuery = () => {
  return useQuery<RankType[], AxiosError>(
    "rankList",
    async () => {
      const response = await instance.get<RankType[]>(
        "http://49.50.175.242:8082/v1/api/rank"
      );

      return response.data;
    },
    {
      cacheTime: 300000,
    }
  );
};