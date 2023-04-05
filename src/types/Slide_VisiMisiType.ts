import { ImageType } from "./ImageType";

export type slide_visi_misiType = {
  id: number;
  attributes: {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image: ImageType;
  };
};
