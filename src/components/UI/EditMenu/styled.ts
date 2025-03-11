import styled from 'styled-components';

const EDIT_MENU_RIGHT_OFFSET = '-15%';
const EDIT_MENU_MIN_WIDTH = '120px';

export const EditMenuStyled = styled.div`
  position: absolute;
  top: 0;
  right: ${EDIT_MENU_RIGHT_OFFSET};
  background-color: ${({
    theme: {
      colors: { editMenuBackground },
    },
  }) => editMenuBackground};
  border: ${({
    theme: {
      border: { editMenu },
    },
  }) => editMenu};
  border-radius: ${({
    theme: {
      borderRadius: { editMenu },
    },
  }) => editMenu};
  padding: ${({
    theme: {
      padding: { editMenu },
    },
  }) => editMenu};
  box-shadow: ${({
    theme: {
      boxShadow: { editMenu },
    },
  }) => editMenu};
  z-index: ${({
    theme: {
      zIndex: { editMenu },
    },
  }) => editMenu};
  min-width: ${EDIT_MENU_MIN_WIDTH};
  font-size: ${({
    theme: {
      fontSizes: { medium },
    },
  }) => medium};

  @media (max-width: ${({
      theme: {
        breakpoints: { md },
      },
    }) => md}) {
    top: 0;
    right: 0;
  }
`;

export const EditMenuItem = styled.button`
  display: block;
  width: 100%;
  padding: ${({
    theme: {
      padding: { editMenuItem },
    },
  }) => editMenuItem};
  text-align: left;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${({
    theme: {
      colors: { editMenuItem },
    },
  }) => editMenuItem};
  &:hover {
    background-color: ${({
      theme: {
        colors: { editMenuItemHover },
      },
    }) => editMenuItemHover};
  }
`;
