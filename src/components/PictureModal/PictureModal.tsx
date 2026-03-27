import Modal from '@components/ui/Modal';
import type { GalleryPictureApiItem } from '@hooks/useGallery.types';
import { useMemo, type ReactElement } from 'react';
import classNames from 'classnames/bind';
import useFavourites from '@hooks/useFavourites';
import Button from '@components/ui/Button';
import Picture from '@components/Picture';
import styles from './PictureModal.module.scss';
import { PICTURE_MODAL_DESCRIPTION } from './PictureModal.constants';
import PictureModalCounters from './components/PictureModalCounters/PictureModalCounters';
import { getPictureModalCounter } from './PictureModal.logic';
import PictureModalDetail from './components/PictureModalDetail';

const cx = classNames.bind(styles);

type GalleryPictureModalProps = {
  isOpen: boolean;
  onClose: () => void;
  picture: GalleryPictureApiItem;
};

const PictureModal = ({ isOpen, onClose, picture }: GalleryPictureModalProps): ReactElement => {
  const { getIsFavourite, handleFavouritesChange } = useFavourites();
  const isFavourite = getIsFavourite(picture.id);
  const resolution = `${picture.width} x ${picture.height}`;
  // only used for dummy value rendering
  const counters = useMemo(() => {
    const initialFavouriteCount = getPictureModalCounter();
    const downloadCount = getPictureModalCounter();
    const viewCount = getPictureModalCounter();

    return { initialFavouriteCount, downloadCount, viewCount };
  }, []);
  const favouriteCount = counters.initialFavouriteCount + Number(isFavourite);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={cx('picture-modal')}>
        <div className={cx('picture-modal__photo')}>
          <Picture src={picture.download_url} author={picture.author} id={picture.id} />
        </div>
        <Modal.Body className={cx('picture-modal__details')}>
          <div className={cx('picture-modal__header')}>
            <PictureModalDetail isAuthor label="author" value={picture.author} />
            <Button variant="favourite" isActive={isFavourite} onClick={() => handleFavouritesChange(picture)} />
          </div>
          <PictureModalDetail isDescription label="description" value={PICTURE_MODAL_DESCRIPTION} />
          <div className={cx('picture-modal__footer')}>
            <PictureModalCounters
              downloadCount={counters.downloadCount}
              favouriteCount={favouriteCount}
              viewCount={counters.viewCount}
            />
            <div className={cx('picture-modal__separator')} />
            <PictureModalDetail label="resolution" value={resolution} />
          </div>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default PictureModal;
