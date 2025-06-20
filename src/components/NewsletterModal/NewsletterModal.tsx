import Button from '@components/ui/Button';
import Modal, { type ModalProps } from '@components/ui/Modal';
import { useState, type ReactElement } from 'react';
import styles from './NewsletterModal.module.scss';
import classNames from 'classnames/bind';
import InputGroup from '@components/ui/InputGroup';
import { validateNewsletterForm } from './NewsletterModal.logic';
import type { NewsletterFormData } from './NewsletterModal.types';
import { INITIAL_NEWSLETTER_FORM_DATA } from './NewsletterModal.constants';

const cx = classNames.bind(styles);

const NewsletterModal = ({ isOpen, onClose }: ModalProps): ReactElement => {
  const [formData, setFormData] = useState(INITIAL_NEWSLETTER_FORM_DATA);
  const [errors, setErrors] = useState<Partial<NewsletterFormData>>({});

  const resetForm = () => {
    setFormData(INITIAL_NEWSLETTER_FORM_DATA);
    setErrors({});
  };

  const handleSubmit = () => {
    const errorMessage = validateNewsletterForm(formData);
    setErrors(errorMessage);

    if (Object.keys(errorMessage).length === 0) {
      console.log('handle submit');
      resetForm();
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Body>
        <div className={cx('newsletter-modal')}>
          <h1 className={cx('newsletter-modal__heading')}>Subscribe to our newsletter</h1>
          <form
            className={cx('newsletter-modal__content')}
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <InputGroup isError={Boolean(errors?.name)}>
              <InputGroup.Label>Your name</InputGroup.Label>
              <InputGroup.Input
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
              />
              <InputGroup.Feedback>{errors?.name}</InputGroup.Feedback>
            </InputGroup>
            <InputGroup isError={Boolean(errors?.email)}>
              <InputGroup.Label>Your email address</InputGroup.Label>
              <InputGroup.Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
              />
                            <InputGroup.Feedback>{errors?.email}</InputGroup.Feedback>

            </InputGroup>
            <Button type="submit">SUBSCRIBE</Button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};
export default NewsletterModal;
