import styled from 'styled-components';

export const PageContainer = styled.div`
  font-family: ${(props) => props.theme.fontFamily.primary};
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.background};
  min-height: 100%;
`;

export const BoardContainer = styled.div`
  display: flex;
  gap: ${(props) => props.theme.padding.medium};
  background-color: ${(props) => props.theme.colors.backgroundBoard};
  overflow-x: auto;
  width: 100%;
  box-sizing: border-box;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
    margin: 10px 0;
  }
`;

export const PlusButton = styled.button`
  margin: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: #475569;
  width: 40px;
  height: 40px;
  border: 1px solid #475569;
  border-radius: 50%;
  cursor: pointer;
  user-select: none;
  font-size: 24px;
  line-height: 1;
  font-weight: bold;
  padding: 0;

  &:hover {
    color: #3e4a57;
  }

  &:focus {
    outline: none;
  }
`;

export const Header = styled.div`
  margin: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

export const MobileHeader = styled.div`
  display: none;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: block;
    width: 100%;
    height: 50px;
    background-color: #fff;
    padding: 10px;
  }
`;

export const MobileMenuButton = styled.button`
  color: #475569;
  background-color: transparent;
  border: none;
  font-size: ${(props) => props.theme.fontSizes.taskTitle};
`;
