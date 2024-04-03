import { AxiosError } from "axios"
import { useMutation } from "react-query";
import instance from "../../../axios";

export interface GeneralResponse {
  code: string;
  message: string;
  data: boolean;
}

export interface RegisterRequest {
  username: string;
  nickname: string;
  password: string;
  image: string;
}

export const useUserRegister = () => {
  return useMutation<GeneralResponse, AxiosError, RegisterRequest, unknown>(
    async (registerData: RegisterRequest) => {
      const response = await instance.post<GeneralResponse>(
        `${import.meta.env.VITE_BASE_URL}/auth/register`,
        registerData
      );
      return response.data;
    }
  );
};
