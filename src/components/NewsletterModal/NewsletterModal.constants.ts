import { EMAIL_REGEX_CHECK } from '@constants/constants';
import { NewsletterFormFields } from './NewsletterModal.enums';
import type { NewsletterFormData, NewsletterValidationRulesItem } from './NewsletterModal.types';
const ERROR_MESSAGE_REQUIRED = 'Field is required';
const ERROR_MESSAGE_EMAIL_INVALID = 'Please input a valid email address';
export const INITIAL_NEWSLETTER_FORM_DATA: NewsletterFormData = { name: '', email: '' };

export const NEWSLETTER_FORM_VALIDATION_RULES: NewsletterValidationRulesItem[] = [
  {
    name: NewsletterFormFields.NAME,
    validation: (value) => {
      if (!value) return ERROR_MESSAGE_REQUIRED;
      return null;
    },
  },
  {
    name: NewsletterFormFields.EMAIL,
    validation: (value) => {
      if (!value) return ERROR_MESSAGE_REQUIRED;
      if (!EMAIL_REGEX_CHECK.test(value)) return ERROR_MESSAGE_EMAIL_INVALID;
      return null;
    },
  },
];
