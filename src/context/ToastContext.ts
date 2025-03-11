import { createContext } from 'react';
import { ToastContextType } from '@myTypes/toast';

const ToastContext = createContext<ToastContextType | undefined>(undefined);
export default ToastContext;
