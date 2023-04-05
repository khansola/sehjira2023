import { ImageType } from "./ImageType";

type socialMedia = {
  social_medias: {
    id: number;
    url_platform: string;
    platform: string;
  };
};

type socialMedias = socialMedia[];

export type teamType = {
  id: number;
  attributes: {
    title: string;
    division: string;
    degree: string;
    post_degree: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image: ImageType;
    social_medias: socialMedias;
  };
};
