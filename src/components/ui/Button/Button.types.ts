import type { ButtonVariants } from "./Button.enums";

export type ButtonVariant = typeof ButtonVariants[keyof typeof ButtonVariants];