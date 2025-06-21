import type { NewsletterFormData } from './NewsletterModal.types';
import { NEWSLETTER_FORM_VALIDATION_RULES } from './NewsletterModal.constants';

export const validateNewsletterForm = (formData: NewsletterFormData): Partial<NewsletterFormData> =>
  (Object.keys(formData) as (keyof NewsletterFormData)[]).reduce<Partial<NewsletterFormData>>((errors, key) => {
    const matchingValidationRule = NEWSLETTER_FORM_VALIDATION_RULES.find((rule) => rule.name === key);
    const error = matchingValidationRule ? matchingValidationRule.validation(formData[key]) : null;

    // if error exists add property and value to object
    return error ? { ...errors, [key]: error } : errors;
  }, {});

// idk if it's worth splitting into separate function, but it's repetetive
export const getErrorLabelId = (fieldName: string): string => `${fieldName}-error`;
