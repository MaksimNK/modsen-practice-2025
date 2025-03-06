import styled from 'styled-components';

interface StyledProps {
  isOpen: boolean;
}

export const DrawerContainer = styled.div<StyledProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 80%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.taskBackground};
  box-shadow: ${(props) => props.theme.boxShadow.taskItem};
  transform: ${(props) =>
    props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
`;

export const Overlay = styled.div<StyledProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  z-index: 999;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
  color: ${(props) => props.theme.colors.textPrimary};
`;

export const DrawerContent = styled.div`
  padding: 20px;
  color: ${(props) => props.theme.colors.textPrimary};
`;
