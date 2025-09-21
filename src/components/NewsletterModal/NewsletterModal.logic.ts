import type {
  NewsletterFormData,
  NewsletterFormErrors,
  NewsletterFormField,
  NewsletterValidation,
} from './NewsletterModal.types';
import {
  ERROR_MESSAGE_EMAIL_INVALID,
  ERROR_MESSAGE_REQUIRED,
  NEWSLETTER_EMAIL_REGEX,
} from './NewsletterModal.constants';
import { NewsletterFormFields } from './NewsletterModal.enums';

const validateName: NewsletterValidation = (value) => (value ? null : ERROR_MESSAGE_REQUIRED);

const validateEmail: NewsletterValidation = (value) => {
  if (!value) return ERROR_MESSAGE_REQUIRED;
  return NEWSLETTER_EMAIL_REGEX.test(value) ? null : ERROR_MESSAGE_EMAIL_INVALID;
};

const getNewsletterValidationRules = (): Record<NewsletterFormField, NewsletterValidation> => ({
  [NewsletterFormFields.NAME]: validateName,
  [NewsletterFormFields.EMAIL]: validateEmail,
});

export const validateNewsletterForm = (formData: NewsletterFormData): NewsletterFormErrors =>
  (Object.keys(formData) as (keyof NewsletterFormData)[]).reduce((errors, key) => {
    const validationRules = getNewsletterValidationRules();
    const validationFn = validationRules[key];
    const errorValue = validationFn(formData[key]);
    return { ...errors, [key]: errorValue };
  }, {} as NewsletterFormErrors);

export const getTrimmedNewsletterFormData = (formData: NewsletterFormData): NewsletterFormData =>
  Object.fromEntries(
    Object.entries(formData).map(([k, v]) => [k, typeof v === 'string' ? v.trim() : v])
  ) as NewsletterFormData;
