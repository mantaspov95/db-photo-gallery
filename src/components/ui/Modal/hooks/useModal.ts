import { useContext } from 'react';
import ModalContext from '../context/ModalContext';

const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be used within ModalContext.Provider');
  }
  return context;
};
export default useModal;
