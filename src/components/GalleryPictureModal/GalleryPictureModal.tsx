import Modal from '@components/ui/Modal';
import type { GalleryPictureApiItem } from '@hooks/useGallery.types';
import type { ReactElement } from 'react';

type GalleryPictureModalProps = {
  isOpen: boolean;
  onClose: () => void;
  apiItem: GalleryPictureApiItem;
};

const GalleryPictureModal = ({ isOpen, onClose, apiItem }: GalleryPictureModalProps): ReactElement => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <></>
    </Modal>
  );
};

export default GalleryPictureModal;
