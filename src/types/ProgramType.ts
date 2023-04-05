import { ImageType } from "./ImageType";

export type programType = {
  id: number;
  attributes: {
    Title: string;
    slug: string;
    Excerpt: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    content: string;
    Image: ImageType;
  };
};
