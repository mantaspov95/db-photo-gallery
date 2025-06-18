import Modal, { type ModalProps } from '@components/ui/Modal';

const NewsletterModal = ({ isOpen, onClose }: ModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Body>
        <div>hello</div>
      </Modal.Body>
    </Modal>
  );
};
export default NewsletterModal;
