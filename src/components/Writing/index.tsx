import Layout from "../common/Layout";
import WritingHeader from "./Header";
import * as W from "./style";
import { useCreatePost } from "../../hooks/Writing/usePost";
import { useNavigate } from "react-router-dom";

const Writing = () => {
  const navigate = useNavigate();
  const { postData, handleChange, handleSubmit } = useCreatePost();
  
  return (
    <Layout>
      <W.WritingContainer onSubmit={handleSubmit}>
        <WritingHeader />
        <W.WritingTitleInput
          type="text"
          name="title"
          value={postData.title}
          placeholder="제목"
          onChange={handleChange}
        />
        <W.WritingContentInput
          name="content"
          value={postData.content}
          placeholder="내용을 입력하세요"
          onChange={handleChange}
        />
        <W.ImageButton />
        <W.WritingButtonWrapper>
          <W.WritingCancelButton onClick={() => navigate("/")}>
            <span>취소</span>
          </W.WritingCancelButton>
          <W.WritingPostButton type="submit">
            <span>작성완료</span>
          </W.WritingPostButton>
        </W.WritingButtonWrapper>
      </W.WritingContainer>
    </Layout>
  );
};

export default Writing;
