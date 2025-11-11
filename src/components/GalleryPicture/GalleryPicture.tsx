import type { GalleryPictureApiItem } from '@hooks/useGallery.types';
import { useState, type ReactElement } from 'react';
import classNames from 'classnames/bind';
import useFavourites from '@hooks/useFavourites';
import Button from '@components/ui/Button';
import GalleryPictureModal from '@components/PictureModal';
import Picture from '@components/Picture';
import { getGalleryPictureReducedImageUrl, getGalleryPictureVariant } from './GalleryPicture.logic';
import styles from './GalleryPicture.module.scss';

const cx = classNames.bind(styles);

type GalleryPictureProps = {
  apiItem: GalleryPictureApiItem;
};

const GalleryPicture = ({ apiItem }: GalleryPictureProps): ReactElement => {
  const { getIsFavourite, handleFavouritesChange } = useFavourites();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const reducedImageUrl = getGalleryPictureReducedImageUrl(apiItem.id, apiItem.width, apiItem.height);
  const variant = getGalleryPictureVariant(apiItem.width, apiItem.height);
  const isFavourite = getIsFavourite(apiItem.id);

  return (
    <>
      <div className={cx('gallery-picture', `gallery-picture--${variant}`)}>
        <button className={cx('gallery-picture__button')} type="button" onClick={() => setIsModalOpen(true)}>
          <Picture src={reducedImageUrl} author={apiItem.author} id={apiItem.id} />
        </button>

        <Button
          variant="favourite"
          isActive={isFavourite}
          type="button"
          className={cx('gallery-picture__favourite', { 'gallery-picture__favourite--active': isFavourite })}
          onClick={() => handleFavouritesChange(apiItem)}
        />
      </div>
      <GalleryPictureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} apiItem={apiItem} />
    </>
  );
};

export default GalleryPicture;
