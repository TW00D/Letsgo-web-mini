import { useEffect, useState } from "react";
import { getToken } from "../../utils/functions/TokenManagers";
import instance from "../../utils/axios";
import axios from "axios";

interface Picture {
  id: string;
}

interface ApiResponse<T> {
  code: string;
  message: string;
  data: T;
}

export function useReadPicture(id: string) {
  const [picture, setPicture] = useState<Picture | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const { accessToken } = getToken();
    setIsLoading(true);

    async function fetchPicture() {
      try {
        const response = await instance.get<ApiResponse<Picture>>(
          `http://49.50.175.242:6742/picture/${id}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const pictureData = response.data.data;
        setPicture(pictureData);
        setIsLoading(false);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError("서버 오류 발생");
        } else {
          setError("네트워크 오류 발생");
        }
        setIsLoading(false);
      }
    }

    fetchPicture();
  }, [id]);

  return { picture, isLoading, error };
}
