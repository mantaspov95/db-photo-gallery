import { createContext } from 'react';
import type { ModalContextType } from './ModalContext.types';

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export default ModalContext;
