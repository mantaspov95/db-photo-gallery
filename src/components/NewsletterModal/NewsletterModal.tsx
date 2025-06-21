import Button from '@components/ui/Button';
import Modal, { type ModalProps } from '@components/ui/Modal';
import { useId, useState, type ReactElement } from 'react';
import classNames from 'classnames/bind';
import InputGroup from '@components/ui/InputGroup';
import styles from './NewsletterModal.module.scss';
import { getErrorLabelId, validateNewsletterForm } from './NewsletterModal.logic';
import type { NewsletterFormData } from './NewsletterModal.types';
import { INITIAL_NEWSLETTER_FORM_DATA } from './NewsletterModal.constants';
import { NewsletterFormFields } from './NewsletterModal.enums';

const cx = classNames.bind(styles);

const NAME_ERROR_ID = getErrorLabelId(NewsletterFormFields.NAME);
const EMAIL_ERROR_ID = getErrorLabelId(NewsletterFormFields.EMAIL);

const NewsletterModal = ({ isOpen, onClose }: ModalProps): ReactElement => {
  const accNameId = useId(); // https://clhenrick.io/blog/react-a11y-modal-dialog/

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
    <Modal isOpen={isOpen} onClose={onClose} aria-label={accNameId}>
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
            {/* this could be made into .map to DRY but it's only 2 fields and not likely to change */}
            <InputGroup isError={Boolean(errors?.name)}>
              <InputGroup.Label htmlFor={NewsletterFormFields.NAME}>Your name</InputGroup.Label>
              <InputGroup.Input
                autoComplete="name"
                id={NewsletterFormFields.NAME}
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                aria-describedby={NAME_ERROR_ID}
              />
              <InputGroup.Feedback id={NAME_ERROR_ID}>{errors?.name}</InputGroup.Feedback>
            </InputGroup>
            <InputGroup isError={Boolean(errors?.email)}>
              <InputGroup.Label htmlFor={NewsletterFormFields.EMAIL}>Your email address</InputGroup.Label>
              <InputGroup.Input
                id={NewsletterFormFields.EMAIL}
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                aria-describedby={EMAIL_ERROR_ID}
              />
              <InputGroup.Feedback id={EMAIL_ERROR_ID}>{errors?.email}</InputGroup.Feedback>
            </InputGroup>
            <Button type="submit">SUBSCRIBE</Button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};
export default NewsletterModal;
