import Button from '@components/ui/Button';
import Modal, { type ModalProps } from '@components/ui/Modal';
import { useId, useState, type ReactElement } from 'react';
import classNames from 'classnames/bind';
import InputGroup from '@components/ui/InputGroup';
import styles from './NewsletterModal.module.scss';
import type { NewsletterFormData, NewsletterFormField } from './NewsletterModal.types';
import {
  INITIAL_NEWSLETTER_FORM_DATA,
  NEWSLETTER_EMAIL_ERROR_ID,
  NEWSLETTER_NAME_ERROR_ID,
} from './NewsletterModal.constants';
import { getTrimmedNewsletterFormData, validateNewsletterForm } from './NewsletterModal.logic';
import { NewsletterFormFields } from './NewsletterModal.enums';

const cx = classNames.bind(styles);

const NewsletterModal = ({ isOpen, onClose }: ModalProps): ReactElement => {
  const accNameId = useId();

  const [formData, setFormData] = useState(INITIAL_NEWSLETTER_FORM_DATA);
  const [errors, setErrors] = useState<Partial<NewsletterFormData>>({});

  const resetForm = (): void => {
    setFormData(INITIAL_NEWSLETTER_FORM_DATA);
    setErrors({});
  };

  const handleSubmit = (): void => {
    const errorMessage = validateNewsletterForm(formData);
    const trimmedFormData = getTrimmedNewsletterFormData(formData);
    setFormData(trimmedFormData);
    setErrors(errorMessage);

    if (Object.keys(errorMessage).length === 0) {
      // TODO expand with actual form submission logic
      resetForm();
      onClose();
    }
  };

  const handleInputValueChange = (fieldName: NewsletterFormField, value: string): void => {
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
  };

  const handleClose = (): void => {
    resetForm();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} aria-labelledby={accNameId}>
      <Modal.Body>
        <div className={cx('newsletter-modal')}>
          <h2 className={cx('newsletter-modal__heading')} id={accNameId}>
            Subscribe to our newsletter
          </h2>
          <form
            className={cx('newsletter-modal__content')}
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <InputGroup isError={!!errors.name}>
              <InputGroup.Label htmlFor={NewsletterFormFields.NAME}>Your name</InputGroup.Label>
              <InputGroup.Input
                autoComplete="name"
                id={NewsletterFormFields.NAME}
                value={formData.name}
                onChange={(e) => handleInputValueChange(NewsletterFormFields.NAME, e.target.value)}
                aria-describedby={NEWSLETTER_NAME_ERROR_ID}
              />
              <InputGroup.Feedback id={NEWSLETTER_NAME_ERROR_ID}>{errors?.name}</InputGroup.Feedback>
            </InputGroup>
            <InputGroup isError={!!errors.email}>
              <InputGroup.Label htmlFor={NewsletterFormFields.EMAIL}>Your email address</InputGroup.Label>
              <InputGroup.Input
                id={NewsletterFormFields.EMAIL}
                autoComplete="email"
                value={formData.email}
                onChange={(e) => handleInputValueChange(NewsletterFormFields.EMAIL, e.target.value)}
                aria-describedby={NEWSLETTER_EMAIL_ERROR_ID}
              />
              <InputGroup.Feedback id={NEWSLETTER_EMAIL_ERROR_ID}>{errors?.email}</InputGroup.Feedback>
            </InputGroup>
            <Button type="submit">SUBSCRIBE</Button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};
export default NewsletterModal;
