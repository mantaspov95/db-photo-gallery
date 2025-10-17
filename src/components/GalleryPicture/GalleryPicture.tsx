import type { GalleryPictureApiItem } from '@hooks/useGallery.types';
import type { ReactElement } from 'react';
import classNames from 'classnames/bind';
import styles from './GalleryPicture.module.scss';
import { getGalleryPictureReducedImageUrl, getGalleryPictureVariant } from './GalleryPicture.logic';
import useFavourites from '@hooks/useFavourites';

const cx = classNames.bind(styles);

type GalleryPictureProps = {
  apiItem: GalleryPictureApiItem;
};

const GalleryPicture = ({ apiItem }: GalleryPictureProps): ReactElement => {
  const alt = `Photo by ${apiItem.author}, ID - ${apiItem.id}`;
  const reducedImageUrl = getGalleryPictureReducedImageUrl(apiItem.id, apiItem.width, apiItem.height);
  const variant = getGalleryPictureVariant(apiItem.width, apiItem.height);
  const { favourites, handleFavouritesChange } = useFavourites();

  return (
    <div
      className={cx('gallery-picture', `gallery-picture--${variant}`)}
      onClick={() => handleFavouritesChange(Number(apiItem.id))}
    >
      <img src={reducedImageUrl} alt={alt} />
    </div>
  );
};

export default GalleryPicture;
