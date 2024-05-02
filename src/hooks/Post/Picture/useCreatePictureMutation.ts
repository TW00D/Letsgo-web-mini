import axios, { AxiosError } from "axios";
import { useMutation } from "react-query";

export interface PictureResponse {
  code: number;
  message: string;
  data: {
    id: string;
  };
}

export interface PictureRequestDto {
  picture: File;
}

export const useCreatePictureMutation = () => {
  return useMutation<PictureResponse, AxiosError, PictureRequestDto, unknown>(
    async (pictureData: PictureRequestDto) => {
      const formData = new FormData();
      formData.append("picture", pictureData.picture);

      try {
        const response = await axios.post<PictureResponse>(
          "http://49.50.175.242:6742/v1/api/picture",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        return response.data;
      } catch (error) {
        throw new Error("Error creating picture");
      }
    }
  );
};
