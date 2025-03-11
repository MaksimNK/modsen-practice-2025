import styled from 'styled-components';

export const BurgerMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5em;
  padding: 5px;

  @media (max-width: ${({
      theme: {
        breakpoints: { md },
      },
    }) => md}) {
    position: absolute;
    top: 0;
    left: 10;
    display: block;
  }
`;
