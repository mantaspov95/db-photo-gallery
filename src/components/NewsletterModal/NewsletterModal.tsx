import Modal, { type ModalProps } from '@components/ui/Modal';
import type { ReactElement } from 'react';

const NewsletterModal = ({ isOpen, onClose }: ModalProps): ReactElement => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <Modal.Body>
      <div>hello</div>
    </Modal.Body>
  </Modal>
);
export default NewsletterModal;
