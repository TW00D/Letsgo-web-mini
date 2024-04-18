import toast from "react-hot-toast";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useUserRegister } from "../../utils/api/Auth/signup";

export function useRegister() {
  const [registerData, setRegisterData] = useState<{
    username: string;
    nickname: string;
    password: string;
    image: string;
  }>({
    username: "",
    password: "",
    nickname: "",
    image: "" 
  });
  const navigate = useNavigate();
  const register = useUserRegister(); 

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    register.mutate(registerData, {
      onSuccess: () => { 
        toast.success("회원가입에 성공했습니다.");      
        navigate("/login");
      },
      onError: (err) => { 
        if (axios.isAxiosError(err)) {
          const { status } = err.response?.data as AxiosError;
          switch (status) {
            case 400:
              toast.error("잘못된 요청입니다.");
              break;
            case 404:
              toast.error("사용자를 찾을 수 없습니다.");
              break;
            default:
              toast.error("아이디를 6자 이상 입력해주세요.");
          }
        } else {
          toast.error("네트워크 연결 상태를 확인해주세요.");
        }
      },
    });
  };
  return { registerData, setRegisterData, handleChange, handleSubmit };
}
