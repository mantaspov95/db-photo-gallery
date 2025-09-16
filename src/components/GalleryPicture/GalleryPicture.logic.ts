import { GALLERY_PICTURE_REDUCED_WIDTH } from './GalleryPicture.constants';
import { GALLERY_PICTURE_VARIANTS } from './GalleryPicture.enums';

export const getGalleryPictureVariant = (width: number, height: number): string => {
  const aspectRatio = width / height;
  if (aspectRatio > 1) return GALLERY_PICTURE_VARIANTS.LANDSCAPE;
  return GALLERY_PICTURE_VARIANTS.PORTRAIT;
};
export const getGalleryPictureReducedImageUrl = (id: string, width: number, height: number): string => {
  const aspectRatio = width / height;
  const heightReduced = Math.round(GALLERY_PICTURE_REDUCED_WIDTH / aspectRatio);

  return `https://picsum.photos/id/${id}/${GALLERY_PICTURE_REDUCED_WIDTH}/${heightReduced}`;
};
