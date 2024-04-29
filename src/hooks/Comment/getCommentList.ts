import { AxiosError } from "axios";
import { useQuery } from "react-query";
import instance from "../../utils/axios";
import { getToken } from "../../utils/functions/TokenManagers";

export interface CommentType {
  id: number;
  user: number;
  post: number;
  comment: number;
  content: string;
  liked: number;
  commented: number;
  isLike: boolean;
  userImg: string;
  createdAt: string;
  updatedAt: string;
  username: string;
}

export const useCommentListQuery = (post: number) => {
  return useQuery<CommentType[], AxiosError>(
    ["category", post],
    async () => {
      const { accessToken } = getToken();
      const params = { post };
      const response = await instance.get("/comment", {
        params,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      console.log(response.data.data);
      return response.data.data;
    },
    {
      cacheTime: 300000,
    }
  );
};
