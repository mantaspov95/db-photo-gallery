import { useContext } from 'react';
import ModalContext from '../context/ModalContext';
import type { ModalContextType } from '../context/ModalContext.types';

const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be used within ModalContext.Provider');
  }
  return context;
};
export default useModal;
