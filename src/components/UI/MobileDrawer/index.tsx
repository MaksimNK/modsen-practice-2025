import { FC } from 'react';
import { Overlay, DrawerContainer, CloseButton, DrawerContent } from './styled';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
export const MobileDrawer: FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  return (
    <>
      <Overlay isOpen={isOpen} onClick={onClose} />
      <DrawerContainer isOpen={isOpen}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <DrawerContent>{children}</DrawerContent>
      </DrawerContainer>
    </>
  );
};
