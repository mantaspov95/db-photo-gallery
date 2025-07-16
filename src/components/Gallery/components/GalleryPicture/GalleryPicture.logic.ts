import { PICTURE_MAX_WIDTH } from './GalleryPicture.constants';

export const getScaledImageDimentions = (
  originalWidth: number,
  originalHeight: number
): {
  scaledWidth: number;
  scaledHeight: number;
} => {
  const scaleRatio = PICTURE_MAX_WIDTH / originalWidth;
  const scaledWidth = PICTURE_MAX_WIDTH;
  const scaledHeight = Math.round(originalHeight * scaleRatio);
  return { scaledWidth, scaledHeight };
};

export const getPictureUrl = (id: string, width: number, height: number): string =>
  `https://picsum.photos/id/${id}/${width}/${height}`;
