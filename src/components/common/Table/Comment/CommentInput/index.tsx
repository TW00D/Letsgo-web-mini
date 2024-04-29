import * as c from "./style";
import { useState, useRef, useEffect } from "react";
import Commentimg from "../../../../../assets/commentLogo.svg";
import SubmitComment from "../../../../../assets/writingComment.svg";
import { useCreateComment } from "../../../../../hooks/Comment/useComment";

const CommentInput = () => {
  const commentCount: string = String(10);
  const { commentData, setCommentData, handleChange, handleSubmit } =
    useCreateComment();

  const [isInputVisible, setInputVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickOutside = (e: any) => {
    if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
      setInputVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleContainerClick = () => {
    setInputVisible(true);
  };
  return (
    <c.CommentContainer onSubmit={handleSubmit}>
      <c.CommentInputWrap>
        <c.CommentInputContainer onClick={handleContainerClick}>
          <c.CommentInputWraper>
            <c.CommentInputIcon
              src={Commentimg}
              alt="error"
              style={{ width: "20px", height: "20px" }}
            />
            {isInputVisible ? (
              <input
                type="text"
                ref={inputRef}
                autoFocus
                name="content"
                value={commentData.content}
                onChange={handleChange}
              />
            ) : (
              <span>댓글을 달아주세요</span>
            )}
            <c.CommentButton type="submit">
              <c.CommentSubmit src={SubmitComment} alt="error" />
            </c.CommentButton>
          </c.CommentInputWraper>
        </c.CommentInputContainer>
      </c.CommentInputWrap>
    </c.CommentContainer>
  );
};

export default CommentInput;
