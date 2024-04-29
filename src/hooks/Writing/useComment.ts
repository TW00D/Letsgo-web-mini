import toast from "react-hot-toast";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useCreateCommentMutation } from "../../utils/api/Comment";

type CommentProps = {
  post: number;
  comment: number;
  content: string;
};

export function useCreatePost() {
  const [postData, setPostData] = useState<CommentProps>({
    post: 0,
    comment: 0,
    content: "",
  });

  const navigate = useNavigate();
  const createCommentMutation = useCreateCommentMutation();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLTextAreaElement | HTMLInputElement | HTMLButtonElement
    >
  ) => {
    const { name, value } = e.target;
    setPostData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createCommentMutation.mutate(postData, {
      onSuccess: () => {
        toast.success("댓글 등록에 성공했습니다.");
      },
      onError: (err) => {
        if (axios.isAxiosError(err)) {
          const { status } = err.response?.data as AxiosError;
          toast.error("게시물 등록에 실패했습니다.");
        } else {
          toast.error("네트워크 연결 상태를 확인해주세요.");
        }
      },
    });
  };

  return {
    postData,
    setPostData,
    handleChange,
    handleSubmit,
  };
}
