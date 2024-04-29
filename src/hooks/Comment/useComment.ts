import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useCreateCommentMutation } from "../../utils/api/Comment";
import { useRecoilState } from "recoil";
import { postIdState } from "../../components/atom/postId";

type CommentProps = {
  post: number;
  comment: number;
  content: string;
};

interface CommentGroup {
  title: string;
}

let CommentGroupList: Array<CommentGroup>;

export function useCreateComment() {
  const [postId, setPostId] = useRecoilState(postIdState);

  setPostId(postId);
  const [commentData, setCommentData] = useState<CommentProps>({
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
    setCommentData((prevData) => ({
      ...prevData,
      post: postId,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createCommentMutation.mutate(commentData, {
      // Using the mutation function
      onSuccess: () => {
        toast.success("댓글 등록에 성공했습니다.");
        window.location.reload();
      },
      onError: (err) => {
        if (axios.isAxiosError(err)) {
          const { status } = err.response?.data as AxiosError;
          toast.error("댓글 등록에 실패했습니다.");
          console.log(commentData);
        } else {
          toast.error("네트워크 연결 상태를 확인해주세요.");
        }
      },
    });
  };

  return {
    commentData,
    setCommentData,
    handleChange,
    handleSubmit,
  };
}
