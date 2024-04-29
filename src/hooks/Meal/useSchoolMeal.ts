import { AxiosError } from "axios";
import { useQuery } from "react-query";
import instance from "../../utils/axios";

export interface SchoolMenuResponse {
  code: string;
  message: string;
  data: string[];
}

export const useSchoolMenuQuery = (year: string, month: string, day: string) => {
  return useQuery<SchoolMenuResponse, AxiosError>(
    ["schoolMenu", year, month, day],
    async () => {
      const response = await instance.get<SchoolMenuResponse>(
        `/school?year=${year}&month=${month}&day=${day}`
      );
      return response.data;
    },
    {
      cacheTime: 300000,
    }
  );
};
