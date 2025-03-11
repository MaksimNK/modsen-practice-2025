import { FC, useState, ReactNode } from 'react';
import ToastContext from '@context/ToastContext';
import Toast from '@components/Toast';
import { ToastType } from '@myTypes/toast';

interface IToastProviderProps {
  children: ReactNode;
}

export const ToastProvider: FC<IToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const showToast = (message: string, type: ToastType['type']) => {
    const id = self.crypto.randomUUID();
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toasts.map(({ id, message, type }) => (
        <Toast
          key={id}
          message={message}
          type={type}
          onClose={() => setToasts((prev) => prev.filter((t) => t.id !== id))}
        />
      ))}
    </ToastContext.Provider>
  );
};
