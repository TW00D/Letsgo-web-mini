import React from "react";
import * as S from "./style";
import Likes from "../../../assets/like.svg";
import Comment from "../../../assets/img/comment.svg";
import Viewer from "../../../assets/view.svg";
import Test from "../../../assets/test.svg";
import { useNavigate } from "react-router-dom";
import { usePostListQuery, PostType } from "../../../hooks/Post/getPostList";

const Table: React.FC = () => {
  const navigate = useNavigate();

  const { data: postListData, isLoading, isError } = usePostListQuery(1);
  console.log(postListData);

  return (
    <S.ConfirmListContainer>
      {isLoading ? (
        <div>로딩 중...</div>
      ) : isError ? (
        <div>오류가 발생했습니다.</div>
      ) : !postListData?.length ? (
        <div>게시물이 없습니다.</div>
      ) : (
        postListData.map((post: PostType) => (
          <S.ConfirmListItemContaienr
            onClick={() => navigate(`/post/${post.id}`)}
            key={post.id}
            style={{ cursor: "pointer" }}
          >
            <S.ConfirmListItemContaienr>
              <S.ConfirmImageWrap>
                <img src={Test} alt="test" />
              </S.ConfirmImageWrap>
              <S.ConfirmListItem style={{ width: "30%", paddingLeft: "1%" }}>
                {post.title}
                <S.ConfirmSubTitle>
                  <span>통합</span>
                  <span> | </span>
                  <span>선화예술고등학교 3학년</span>
                </S.ConfirmSubTitle>
              </S.ConfirmListItem>
              <S.RightTopInfo>{new Date(post.createdAt).toLocaleDateString()}</S.RightTopInfo>
              <S.RightBottomInfo>
                <img src={Likes} alt="Likes" />
                <span>{post.liked}</span>
                <img src={Comment} alt="Comments" />
                <span>{post.commented}</span>
                <img src={Viewer} alt="Viewers" />
                <span>{post.viewed}</span>
              </S.RightBottomInfo>
            </S.ConfirmListItemContaienr>
          </div>
        ))
      )}
    </S.ConfirmListContainer>
  );
};

export default Table;
