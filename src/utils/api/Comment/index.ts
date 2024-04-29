import { AxiosError } from "axios";
import { useMutation } from "react-query";
import instance from "../../axios";
import { getToken } from "../../functions/TokenManagers";

export interface CommentResponse {
  code: string;
  message: string;
  data: boolean;
}

export interface CommentRequestDto {
  post: number;
  comment: number;
  content: string;
}

export const useCreateCommentMutation = () => {
  const { accessToken } = getToken();
  return useMutation<CommentResponse, AxiosError, CommentRequestDto, unknown>(
    async (commentData: CommentRequestDto) => {
      const response = await instance.post<CommentResponse>(
        `${import.meta.env.VITE_BASE_URL}/comment`,
        commentData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return response.data;
    }
  );
};
