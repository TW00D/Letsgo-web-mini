import toast from "react-hot-toast";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useCreatePostMutation } from "../../utils/api/Writing";

type PostProps = {
  category: number;
  title: string;
  content: string;
  picture: string;
};

export function useCreatePost() {
  const [postData, setPostData] = useState<PostProps>({
    category: 1,
    title: "",
    content: "",
    picture: "",
  });
  const [postSelected, setPostSelected] = useState<number>(0);
  const [categorySelected, setCategorySelected] = useState<number>(0);
  const [editorHtml, setEditorHtml] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const navigate = useNavigate();
  const createPostMutation = useCreatePostMutation();

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setPostData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createPostMutation.mutate(postData, {
      onSuccess: () => {
        toast.success("게시물 등록에 성공했습니다.");
        navigate("/");
      },
      onError: (err: AxiosError) => {
        if (axios.isAxiosError(err)) {
          toast.error("게시물 등록에 실패했습니다.");
          console.log("err:", err.response?.data);
        } else {
          toast.error("네트워크 연결 상태를 확인해주세요.");
        }
      },
    });
  };

  const handlePostClick = (index: number) => {
    setPostSelected(index);
  };

  const handleCategoryClick = (index: number) => {
    setCategorySelected(index);
    setPostData((prevData) => ({
      ...prevData,
      category: index,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleImageUpload = async () => {
    try {
      if (!selectedImage) return;
      
      const formData = new FormData();
      formData.append("picture", selectedImage);
  
      const response = await axios.post("http://49.50.175.242:6742/v1/api/picture", formData);
      const imageUrl = response.data.data.id;
  
      const newHtml = `<img src="/v1/api/picture/${imageUrl}" alt="Uploaded Image" />`;
      setEditorHtml(editorHtml + newHtml);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };  

  return {
    postData,
    postSelected,
    setPostData,
    handleChange,
    handleSubmit,
    handlePostClick,
    categorySelected,
    handleCategoryClick,
    handleImageChange,
    handleImageUpload
  };
}
