import { FC, ReactNode, useEffect } from 'react';
import { ModalContent, ModalOverlay } from './styled';

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal: FC<IModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const modalContent = document.querySelector('.modal-content');
      if (
        isOpen &&
        modalContent &&
        !modalContent.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent className="modal-content">{children}</ModalContent>
    </ModalOverlay>
  );
};
