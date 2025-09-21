import type { NewsletterFormFields } from './NewsletterModal.enums';

export type NewsletterFormData = {
  [NewsletterFormFields.NAME]: string;
  [NewsletterFormFields.EMAIL]: string;
};

export type NewsletterFormField = (typeof NewsletterFormFields)[keyof typeof NewsletterFormFields];

export type NewsletterValidation = (value: string) => string | null;

export type NewsletterValidationRulesItem = {
  name: NewsletterFormField;
  validation: NewsletterValidation;
};

export type NewsletterFormErrors = Record<NewsletterFormField, string | null>;
