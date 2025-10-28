import { useContext } from 'react';
import InputGroupContext from '../context/InputGroupContext';
import type { InputGroupContextProps } from '../context/InputGroupContext.types';

const useInputGroup = (): InputGroupContextProps => {
  const context = useContext(InputGroupContext);

  if (!context) {
    throw new Error('useInputGroup must be used within InputGroupContext.Provider');
  }

  return context;
};

export default useInputGroup;
