import * as C from "./style";
import Comment from "./Comment";
import { useRecoilState } from "recoil";
import CommentInput from "./CommentInput";
import { postIdState } from "../../../../components/atom/postId";
import { useCommentListQuery } from "../../../../hooks/Comment/getCommentList";

interface propsType {
  postId: number;
}

const CommentFrame = (props: propsType) => {
  const {
    data: commentListData,
    isLoading,
    isError,
  } = useCommentListQuery(props.postId);
  const [postId, setPostId] = useRecoilState(postIdState);

  setPostId(props.postId);

  return (
    <>
      <C.CommentContainer>
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div> </div>
        ) : !commentListData?.length ? (
          <>
            <C.CommentHeaderWraper>
              <C.CommentHeaderTitle>댓글</C.CommentHeaderTitle>
              <C.CommentNumber>{0}</C.CommentNumber>
              <C.CommentRestart onClick={() => window.location.reload()}>
                새로고침
              </C.CommentRestart>
            </C.CommentHeaderWraper>
            <CommentInput />
          </>
        ) : (
          <>
            <C.CommentHeaderWraper>
              <C.CommentHeaderTitle>댓글</C.CommentHeaderTitle>
              <C.CommentNumber>{commentListData.length}</C.CommentNumber>
              <C.CommentRestart onClick={() => window.location.reload()}>
                새로고침
              </C.CommentRestart>
            </C.CommentHeaderWraper>
            <CommentInput />
            {commentListData.map((data) => (
              <Comment data={data}></Comment>
            ))}
          </>
        )}
      </C.CommentContainer>
    </>
  );
};

export default CommentFrame;
