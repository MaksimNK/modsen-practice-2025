import { FC } from 'react';
import { BurgerMenuButton } from './styled';

interface BurgerMenuProps {
  isOpen: boolean;
  onClick: () => void;
}

export const BurgerMenu: FC<BurgerMenuProps> = ({ isOpen, onClick }) => {
  return (
    <BurgerMenuButton onClick={onClick}>{isOpen ? '✕' : '☰'}</BurgerMenuButton>
  );
};
