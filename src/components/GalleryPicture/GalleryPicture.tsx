import type { GalleryPictureApiItem } from '@hooks/useGallery.types';
import type { ReactElement } from 'react';

type GalleryPictureProps = {
  apiItem: GalleryPictureApiItem;
};

const GalleryPicture = ({ apiItem }: GalleryPictureProps): ReactElement => {
  const alt = `Photo ${apiItem.author} ${apiItem.id}`;

  return <img src={apiItem.download_url} alt={alt} />;
};

export default GalleryPicture;
