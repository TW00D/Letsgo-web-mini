import Layout from "../common/Layout";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import WritingHeader from "./Header";
import * as W from "./style";
import { useCreatePost } from "../../hooks/Writing/usePost";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Writing = () => {
  const navigate = useNavigate();
  const {
    postData,
    handleChange,
    handleSubmit,
    handleImageChange,
    handleImageUpload,
  } = useCreatePost();
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
        <input type="file" onChange={handleImageUpload} />  
        <W.ImageButton type="button" onClick={handleImageUpload}/>
        <W.WritingTitleInput
          type="text"
          name="title"
          value={postData.title}
          placeholder="제목"
          onChange={handleChange}
        />
        <ReactQuill
          theme="snow"
          value={editorHtml}
          onChange={handleEditorChange}
          placeholder="내용을 입력하세요"
          style={{
            height: "60%",
            outline: "none",
            border: "1px solid #bdbdc8",
            paddingLeft: "13px",
            fontFamily: "pretendard",
            fontSize: "0.8em",
            padding: "2%",
          }}
        />
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
