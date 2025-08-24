import { NewsletterFormFields } from './NewsletterModal.enums';
import type { NewsletterFormData } from './NewsletterModal.types';

export const ERROR_MESSAGE_REQUIRED = 'Field is required';
export const ERROR_MESSAGE_EMAIL_INVALID = 'Please input a valid email address';
export const INITIAL_NEWSLETTER_FORM_DATA: NewsletterFormData = { name: '', email: '' };
export const NEWSLETTER_NAME_ERROR_ID = `${NewsletterFormFields.NAME}-error`;
export const NEWSLETTER_EMAIL_ERROR_ID = `${NewsletterFormFields.EMAIL}-error`;

export const NEWSLETTER_EMAIL_REGEX_CHECK = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/g;
