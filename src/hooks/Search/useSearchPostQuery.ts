import { AxiosError } from "axios";
import { useQuery } from "react-query";
import instance from "../../utils/axios";
import { getToken } from "../../utils/functions/TokenManagers";

export interface Post {
  id: number;
  user: number;
  category: number;
  title: string;
  content: string;
  picture: string;
  viewed: number;
  liked: number;
  commented: number;
  isLike: boolean;
  userImg: string;
  createdAt: string;
  updatedAt: string;
}

export interface SearchPostResponse {
  code: string;
  message: string;
  data: Post[];
}

export const useSearchPostQuery = (query: string) => {
  const { accessToken } = getToken();
  return useQuery<SearchPostResponse, AxiosError>(
    ["searchPost", query],
    async () => {
      const response = await instance.get<SearchPostResponse>(
        `/post/search?q=${query}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return response.data;
    },
    {
      cacheTime: 300000,
    }
  );
};
