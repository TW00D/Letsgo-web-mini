import { AxiosError } from "axios";
import { useQuery } from "react-query";
import instance from "../../utils/axios";

export interface TrendChartResponse {
  code: string;
  message: string;
  data: string[];
}

export const useTrendChartQuery = () => {
  return useQuery<TrendChartResponse, AxiosError>(
    ["trend"],
    async () => {
      const response = await instance.get<TrendChartResponse>("/rank");
      return response.data;
    },
    {
      cacheTime: 60000,
    }
  );
};
