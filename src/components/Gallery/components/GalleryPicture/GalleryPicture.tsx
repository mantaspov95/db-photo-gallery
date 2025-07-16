import type { GalleryPictureApiItem } from '@components/Gallery/Gallery.types';
import type { ReactElement } from 'react';
import { getPictureUrl, getScaledImageDimentions } from './GalleryPicture.logic';

type GalleryPictureProps = {
  apiItem: GalleryPictureApiItem;
};

const GalleryPicture = ({ apiItem }: GalleryPictureProps): ReactElement => {
  const { scaledWidth, scaledHeight } = getScaledImageDimentions(apiItem.width, apiItem.height);
  const imageUrl = getPictureUrl(apiItem.id, scaledWidth, scaledHeight);
  const alt = `Photo ${apiItem.author} ${apiItem.id}`;

  return <img src={imageUrl} width={scaledWidth} height={scaledHeight} decoding="async" alt={alt} />;
};

export default GalleryPicture;
