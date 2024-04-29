import toast from "react-hot-toast";
import axios, { AxiosError } from "axios";
import { useLikeCommentMutation } from "../../utils/api/Post/Like";
import { useCancelCommentLikeMutation } from "../../utils/api/Post/Like";
import { useRecoilState } from "recoil";
import { likeCountState } from "../../components/atom/likeCount";

export function useLikeComment() {
  const likePostMutation = useLikeCommentMutation();
  const cancelPostLikeMutation = useCancelCommentLikeMutation();
  const [likeCount, setLikeCount] = useRecoilState(likeCountState);

  const handleLikePost = (postId: number) => {
    likePostMutation.mutate(postId, {
      onSuccess: () => {
        setLikeCount((prevCount: number) => prevCount + 1);
        toast.success("게시물에 좋아요를 표시했습니다.");
      },
      onError: (err) => {
        if (axios.isAxiosError(err)) {
          const { status } = err.response?.data as AxiosError;
          switch (status) {
            case 400:
              toast.error("게시물 좋아요에 실패했습니다.");
              break;
            default:
              toast.error("게시물 좋아요 요청에 실패했습니다.");
          }
        } else {
          toast.error("네트워크 연결 상태를 확인해주세요.");
        }
      },
    });
  };

  const handleCancelLikePost = (postId: number) => {
    cancelPostLikeMutation.mutate(postId, {
      onSuccess: () => {
        setLikeCount((prevCount: number) => prevCount - 1);
        toast.success("게시물 좋아요를 취소했습니다.");
      },
      onError: (err) => {
        if (axios.isAxiosError(err)) {
          const { status } = err.response?.data as AxiosError;
          switch (status) {
            case 400:
              toast.error("좋아요 취소에 실패했습니다.");
              break;
            default:
              toast.error("게시물 좋아요 취소 요청에 실패했습니다.");
          }
        } else {
          toast.error("네트워크 연결 상태를 확인해주세요.");
        }
      },
    });
  };

  return {
    handleLikePost,
    handleCancelLikePost,
  };
}
