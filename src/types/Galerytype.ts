import { ImageType } from "./ImageType";

export type galeryType = {
  id: 2;
  attributes: {
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    instagram: string;
    linkedin: string;
    twitter: string;
    facebook: string;
    image: ImageType;
  };
};
