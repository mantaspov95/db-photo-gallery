import { NewsletterFormFields } from './NewsletterModal.enums';
import type { NewsletterFormData } from './NewsletterModal.types';

export const ERROR_MESSAGE_REQUIRED = 'Field is required';
export const ERROR_MESSAGE_EMAIL_INVALID = 'Please input a valid email address';
export const INITIAL_NEWSLETTER_FORM_DATA: NewsletterFormData = { name: '', email: '' };
export const NEWSLETTER_NAME_ERROR_ID = `${NewsletterFormFields.NAME}-error`;
export const NEWSLETTER_EMAIL_ERROR_ID = `${NewsletterFormFields.EMAIL}-error`;

export const NEWSLETTER_EMAIL_REGEX =
  // https://stackoverflow.com/questions/201323/how-can-i-validate-an-email-address-using-a-regular-expression
  // eslint-disable-next-line no-control-regex
  /(?:[a-z0-9!#$%&'*+\x2f=?^_`\x7b-\x7d~\x2d]+(?:\.[a-z0-9!#$%&'*+\x2f=?^_`\x7b-\x7d~\x2d]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9\x2d]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9\x2d]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9\x2d]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
