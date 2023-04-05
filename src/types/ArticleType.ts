import { ImageType } from "./ImageType";

export type ArticleType = {
  id: number;
  attributes: {
    content: string;
    Title: string;
    Excerpt: string;
    slug: string;
    createdAt: string;
    publishedAt: Date;
    updatedAt: Date;
    featured: boolean;
    Image: ImageType;
  };
};
