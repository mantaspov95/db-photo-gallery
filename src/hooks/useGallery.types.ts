export type GalleryPictureApiItem = {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
};

export type GalleryPictureApiResult = {
  pageParams: number[];
  pages: GalleryPictureApiItem[][];
};
