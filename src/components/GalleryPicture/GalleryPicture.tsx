import type { GalleryPictureApiItem } from '@hooks/useGallery.types';
import { useState, type ReactElement } from 'react';
import classNames from 'classnames/bind';
import useFavourites from '@hooks/useFavourites';
import Button from '@components/ui/Button';
import PictureModal from '@components/PictureModal';
import Picture from '@components/Picture';
import { getGalleryPictureReducedImageUrl, getGalleryPictureVariant } from './GalleryPicture.logic';
import styles from './GalleryPicture.module.scss';
import { getPictureAlt } from '@/utils';

const cx = classNames.bind(styles);

type GalleryPictureProps = {
  apiItem: GalleryPictureApiItem;
};

const GalleryPicture = ({ apiItem }: GalleryPictureProps): ReactElement => {
  const { getIsFavourite, handleFavouritesChange } = useFavourites();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isVisibleFavouritesButton, setIsVisibleFavouritesButton] = useState(false);
  const reducedImageUrl = getGalleryPictureReducedImageUrl(apiItem.id, apiItem.width, apiItem.height);
  const variant = getGalleryPictureVariant(apiItem.width, apiItem.height);
  const isFavourite = getIsFavourite(apiItem.id);
  const pictureAlt = getPictureAlt(apiItem.author, apiItem.id);
  const buttonLabel = `Open photo: ${pictureAlt}`;

  return (
    <>
      <div
        className={cx('gallery-picture', `gallery-picture--${variant}`)}
        onMouseEnter={() => setIsVisibleFavouritesButton(true)}
        onMouseLeave={() => setIsVisibleFavouritesButton(false)}
        onFocus={() => setIsVisibleFavouritesButton(true)}
        onBlur={() => setIsVisibleFavouritesButton(false)}
      >
        <button
          className={cx('gallery-picture__button')}
          type="button"
          onClick={() => setIsModalOpen(true)}
          aria-label={buttonLabel}
        >
          <Picture src={reducedImageUrl} author={apiItem.author} id={apiItem.id} />
        </button>
        <div
          className={cx('gallery-picture__favourite-block', {
            'gallery-picture__favourite-block--visible': isFavourite || isVisibleFavouritesButton,
          })}
        >
          <Button
            variant="favourite-picture"
            isActive={isFavourite}
            type="button"
            onClick={() => handleFavouritesChange(apiItem)}
          />
        </div>
      </div>
      <PictureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} picture={apiItem} />
    </>
  );
};

export default GalleryPicture;
