  import Layout from "../common/Layout";
  import WritingHeader from "./Header";
  import * as W from "./style";
  import { useCreatePost } from "../../hooks/Writing/usePost";
  import { useNavigate } from "react-router-dom";
  import { useState } from "react";
  import QuillEditor from "../common/Content/index";

  const Writing = () => {
    const navigate = useNavigate();
    const { postData, handleChange, handleSubmit } = useCreatePost();
    const [editorHtml, setEditorHtml] = useState<string>("");

    const handleEditorChange = (html: string) => {
      setEditorHtml(html);
      handleChange({
        target: { name: "content", value: html },
      } as React.ChangeEvent<HTMLInputElement>);
    };

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
          <QuillEditor value={editorHtml} onChange={handleEditorChange} />
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