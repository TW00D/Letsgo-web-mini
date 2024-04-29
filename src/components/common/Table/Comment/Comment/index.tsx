import * as C from "./style";
import Chat from "../../../../../assets//comment.svg";
import profile from "../../../../../assets/img/ProfileImage.svg";
import Like from "../../../../../assets/like.svg";
import { CommentType } from "../../../../../hooks/Comment/getCommentList";
import { getDateDiff } from "../../../../../hooks/Comment/getDateDiff";

const Comment = (props: { data: CommentType }) => {
  const displayDate = getDateDiff(props.data.createdAt);

  return (
    <C.CommentContainer>
      <C.CommentProfile src={profile}></C.CommentProfile>
      <C.CommentContentWraper>
        <C.CommentContentHeader>
          <C.CommentTitle>{props.data.username}</C.CommentTitle>
          <C.CommentPostTime>{displayDate}</C.CommentPostTime>
        </C.CommentContentHeader>
        <C.CommentContent>{props.data.content}</C.CommentContent>
        <C.CommentBottomWraper>
          <C.CommentIconWraper>
            <C.CommentBottomIcon src={Like}></C.CommentBottomIcon>
            <C.CommentBottomText>{props.data.liked}</C.CommentBottomText>
          </C.CommentIconWraper>
          {/* <C.CommentIconWraper>
            <C.CommentBottomIcon src={Chat}></C.CommentBottomIcon>
            <C.CommentBottomText>6</C.CommentBottomText>
          </C.CommentIconWraper> */}
        </C.CommentBottomWraper>
      </C.CommentContentWraper>
    </C.CommentContainer>
  );
};

export default Comment;
