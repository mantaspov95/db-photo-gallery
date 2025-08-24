import { createContext } from 'react';
import type { InputGroupContextProps } from './InputGroupContext.types';

const InputGroupContext = createContext<InputGroupContextProps | undefined>(undefined);

export default InputGroupContext;
