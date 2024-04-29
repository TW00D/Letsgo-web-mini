import { AxiosError } from "axios";
import { useMutation } from "react-query";
import instance from "../../../axios";

export interface TokenResponse {
  data: {
    username: string;
    nickname: string;
    access_token: string;
    refresh_token: string;
  };
}

export interface UserLoginRequestDto {
  username: string;
  password: string;
}

export const useUserLogin = () => {
  return useMutation<TokenResponse, AxiosError, UserLoginRequestDto, unknown>(
    async (signData: UserLoginRequestDto) => {
      const response = await instance.post<TokenResponse>(
        `${import.meta.env.VITE_BASE_URL}/auth/login`,
        signData
      );
      return response.data;
    }
  );
};
