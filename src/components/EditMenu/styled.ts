import styled from 'styled-components';

export const EditMenuStyled = styled.div`
  position: absolute;
  top: 0;
  right: -15%;
  background-color: ${(props) => props.theme.colors.editMenuBackground};
  border: ${(props) => props.theme.border.editMenu};
  border-radius: ${(props) => props.theme.borderRadius.editMenu};
  padding: ${(props) => props.theme.padding.editMenu};
  box-shadow: ${(props) => props.theme.boxShadow.editMenu};
  z-index: ${(props) => props.theme.zIndex.editMenu};
  min-width: 120px;
  font-size: ${(props) => props.theme.fontSizes.medium};

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    top: 0;
    right: 0;
  }
`;

export const EditMenuItem = styled.button`
  display: block;
  width: 100%;
  padding: ${(props) => props.theme.padding.editMenuItem};
  text-align: left;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${(props) => props.theme.colors.editMenuItem};
  &:hover {
    background-color: ${(props) => props.theme.colors.editMenuItemHover};
  }
`;
