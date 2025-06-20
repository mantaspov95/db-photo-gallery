import type { NewsletterFormFields } from './NewsletterModal.enums';

export type NewsletterFormData = {
  [NewsletterFormFields.NAME]: string;
  [NewsletterFormFields.EMAIL]: string;
};

export type NewsletterFormField = (typeof NewsletterFormFields)[keyof typeof NewsletterFormFields];

export type NewsletterValidationRulesItem = {
  name: NewsletterFormField;
  validation: (value: string /* expand if needed */) => string | null;
};
