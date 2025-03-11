import { FC } from 'react';
import {
  ToastContainer,
  ToastMessage,
  CloseButton,
  ToastWrapper,
} from './styled';

interface IToastProps {
  message: string;
  type: 'success' | 'failure' | 'warning';
  onClose: () => void;
}

export const Toast: FC<IToastProps> = ({ message, type, onClose }) => {
  const typeMap: Record<IToastProps['type'], string> = {
    success: '✅',
    failure: '❌',
    warning: '⚠️',
  };

  const toastIcon = typeMap[type] || null;

  return (
    <ToastWrapper>
      <ToastContainer>
        <ToastMessage>
          {toastIcon && <div>{toastIcon}</div>}
          <p>{message}</p>
        </ToastMessage>
        <CloseButton onClick={onClose}>
          <span>&times;</span>
        </CloseButton>
      </ToastContainer>
    </ToastWrapper>
  );
};
export default Toast;
