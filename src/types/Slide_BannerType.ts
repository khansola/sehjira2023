import { ImageType } from "./ImageType";

export type slide_bannerType = {
  id: number;
  attributes: {
    caption: string;
    desc: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image: ImageType;
  };
};
