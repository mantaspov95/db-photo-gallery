import type { NewsletterFormData, NewsletterValidation } from './NewsletterModal.types';
import {
  ERROR_MESSAGE_EMAIL_INVALID,
  ERROR_MESSAGE_REQUIRED,
  NEWSLETTER_FORM_VALIDATION_RULES,
  NEWSLETTER_EMAIL_REGEX_CHECK,
} from './NewsletterModal.constants';

export const validateNewsletterForm = (formData: NewsletterFormData): Partial<NewsletterFormData> =>
  (Object.keys(formData) as (keyof NewsletterFormData)[]).reduce<Partial<NewsletterFormData>>((errors, key) => {
    const errorFunc = NEWSLETTER_FORM_VALIDATION_RULES[key];
    const errorValue = errorFunc(formData[key]);
    return errorValue ? { ...errors, [key]: errorValue } : errors;
  }, {});

export const getTrimmedNewsletterFormData = (formData: NewsletterFormData): NewsletterFormData => {
  const trimmed = Object.fromEntries(
    Object.entries(formData).map(([k, v]) => [k, typeof v === 'string' ? v.trim() : v])
  ) as NewsletterFormData;

  return trimmed;
};

export const validateName: NewsletterValidation = (value) => (value ? null : ERROR_MESSAGE_REQUIRED);

export const validateEmail: NewsletterValidation = (value) => {
  if (!value) return ERROR_MESSAGE_REQUIRED;
  return NEWSLETTER_EMAIL_REGEX_CHECK.test(value) ? null : ERROR_MESSAGE_EMAIL_INVALID;
};
