import { AxiosError } from "axios";
import { useMutation } from "react-query";
import instance from "../../axios";
import { getToken } from "../../functions/TokenManagers";

export interface PostResponse {
  code: string;
  message: string;
  data: boolean;
}

export interface PostRequestDto {
  category: number;
  title: string;
  content: string;
  picture: string;
}

export const useCreatePostMutation = () => {
  const { accessToken } = getToken();
  return useMutation<PostResponse, AxiosError, PostRequestDto, unknown>(
    async (postData: PostRequestDto) => {
      const response = await instance.post<PostResponse>("/post", postData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    }
  );
};
