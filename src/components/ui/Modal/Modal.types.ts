import type { AriaAttributes, PropsWithChildren } from 'react';

export type ModalProps = PropsWithChildren & {
  isOpen: boolean;
  onClose: () => void;
} & Pick<AriaAttributes, 'aria-labelledby' | 'aria-label' | 'aria-describedby' | 'aria-description'>;
