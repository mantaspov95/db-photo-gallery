import { GALLERY_PICTURE_REDUCED_WIDTH } from './GalleryPicture.constants';
import { GALLERY_PICTURE_VARIANTS } from './GalleryPicture.enums';
import type { GalleryPictureVariant } from './GalleryPicture.types';

export const getGalleryPictureVariant = (width: number, height: number): GalleryPictureVariant => {
  const aspectRatio = width / height;

  return aspectRatio > 1 ? GALLERY_PICTURE_VARIANTS.LANDSCAPE : GALLERY_PICTURE_VARIANTS.PORTRAIT;
};

export const getGalleryPictureReducedImageUrl = (id: string, width: number, height: number): string => {
  const aspectRatio = width / height;
  const heightReduced = Math.round(GALLERY_PICTURE_REDUCED_WIDTH / aspectRatio);

  return `https://picsum.photos/id/${id}/${GALLERY_PICTURE_REDUCED_WIDTH}/${heightReduced}`;
};
