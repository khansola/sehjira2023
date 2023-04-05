export type ImageType = {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats: Object;
      hash: string | null;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string | null;
      provider: string | null;
      provider_metadata: string | null;
      created_at: Date | string;
      updated_at: Date | string;
    };
  };
};
