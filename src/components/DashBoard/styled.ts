import styled from 'styled-components';

const PLUS_BUTTON_SIZE = '40px';

export const PageContainer = styled.div`
  font-family: ${({
    theme: {
      fontFamily: { primary },
    },
  }) => primary};
  display: flex;
  flex-direction: column;
  background-color: ${({
    theme: {
      colors: { background },
    },
  }) => background};
  min-height: 100%;
`;

export const BoardContainer = styled.div`
  display: flex;
  gap: ${({
    theme: {
      spacing: { medium },
    },
  }) => medium};
  background-color: ${({
    theme: {
      colors: { backgroundBoard },
    },
  }) => backgroundBoard};
  overflow-x: auto;
  width: 100%;
  box-sizing: border-box;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${({
      theme: {
        breakpoints: { md },
      },
    }) => md}) {
    flex-direction: column;
    margin: ${({
        theme: {
          spacing: { small },
        },
      }) => small}
      0;
  }
`;

export const PlusButton = styled.button`
  margin: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: ${({
    theme: {
      colors: { plusButtonBorder },
    },
  }) => plusButtonBorder};
  width: ${PLUS_BUTTON_SIZE};
  height: ${PLUS_BUTTON_SIZE};
  border: 1px solid
    ${({
      theme: {
        colors: { plusButtonBorder },
      },
    }) => plusButtonBorder};
  border-radius: 50%;
  cursor: pointer;
  user-select: none;
  font-size: ${({
    theme: {
      fontSizes: { large },
    },
  }) => large};
  line-height: 1;
  font-weight: bold;
  padding: 0;

  &:hover {
    color: ${({
      theme: {
        colors: { plusButtonHover },
      },
    }) => plusButtonHover};
  }

  &:focus {
    outline: none;
  }
`;

export const Header = styled.div`
  margin: ${({
    theme: {
      spacing: { columnMarginTop },
    },
  }) => columnMarginTop};
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: ${({
      theme: {
        breakpoints: { md },
      },
    }) => md}) {
    display: none;
  }
`;

export const MobileHeader = styled.div`
  display: none;
  @media (max-width: ${({
      theme: {
        breakpoints: { md },
      },
    }) => md}) {
    display: block;
    width: 100%;
    height: 50px;
    background-color: ${({
      theme: {
        colors: { backgroundBoard },
      },
    }) => backgroundBoard};
    padding: ${({
      theme: {
        spacing: { small },
      },
    }) => small};
  }
`;

export const MobileMenuButton = styled.button`
  color: ${({
    theme: {
      colors: { plusButtonBorder },
    },
  }) => plusButtonBorder};
  background-color: transparent;
  border: none;
  font-size: ${({
    theme: {
      fontSizes: { taskTitle },
    },
  }) => taskTitle};
`;
