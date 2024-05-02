import React, { useMemo, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useCreatePictureMutation } from "../../../hooks/Post/Picture/useCreatePictureMutation";

interface QuillEditorProps {
  value: string;
  onChange: (html: string) => void;
}

const QuillEditor: React.FC<QuillEditorProps> = ({ value, onChange }) => {
  const quillRef = useRef<ReactQuill | null>(null);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: "1" }, { header: "2" }],
          [{ size: [] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ list: "ordered" }, { list: "bullet" }, { align: [] }],
          [{ indent: "-1" }, { indent: "+1" }],
          ["link", "image"],
          ["clean"],
        ],
        handlers: { image: useCreatePictureMutation },
      },
      clipboard: {
        matchVisual: false,
      },
    }),
    []
  );

  return (
    <ReactQuill
      ref={quillRef}
      theme="snow"
      value={value}
      onChange={onChange}
      placeholder="내용을 입력하세요"
      modules={modules}
      style={{
        height: "60%",
        marginBottom: "4%",
        outline: "none",
        paddingLeft: "13px",
        fontFamily: "pretendard",
        fontSize: "0.8em",
        padding: "2%",
      }}
    />
  );
};

export default QuillEditor;
