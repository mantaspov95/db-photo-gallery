import type { NewsletterFormData } from './NewsletterModal.types';
import { NEWSLETTER_FORM_VALIDATION_RULES } from './NewsletterModal.constants';

export const validateNewsletterForm = (formData: NewsletterFormData): Partial<NewsletterFormData> =>
  (Object.keys(formData) as (keyof NewsletterFormData)[]).reduce<Partial<NewsletterFormData>>((errors, key) => {
    const matchingValidationRule = NEWSLETTER_FORM_VALIDATION_RULES.find((rule) => rule.name === key);
    const error = matchingValidationRule ? matchingValidationRule.validation(formData[key]) : null;

    return error ? { ...errors, [key]: error } : errors;
  }, {});

export const getErrorLabelId = (fieldName: string): string => `${fieldName}-error`;
