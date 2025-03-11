import styled from 'styled-components';
import { lightedHex } from '@utils/lightenHex';

interface ColumnTitleBarProps {
  titleColor: string;
}

const COLUMN_GAP = 40;
const COLUMN_COUNT = 3.5;

export const AddTaskWrapper = styled.div<ColumnTitleBarProps>`
  padding: ${({
    theme: {
      padding: { addTaskWrapper },
    },
  }) => addTaskWrapper};
  cursor: pointer;
  background-color: ${({
    theme: {
      colors: { taskBackground },
    },
  }) => taskBackground};
  border-radius: ${({
    theme: {
      borderRadius: { addTaskWrapper },
    },
  }) => addTaskWrapper};
  margin-bottom: 10px;
  box-shadow: 0 1px 2px
    ${({
      theme: {
        colors: { taskBoxShadow },
      },
    }) => taskBoxShadow};
`;

export const AddTask = styled.div<ColumnTitleBarProps>`
  color: ${({ titleColor }) => titleColor};
  border-radius: ${({
    theme: {
      borderRadius: { addTask },
    },
  }) => addTask};
  background-color: ${({ titleColor }) => lightedHex(titleColor, 0.9)};
  padding: ${({
    theme: {
      padding: { small },
    },
  }) => small};
  width: fit-content;
`;

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 250px;
`;

export const ColumnContainer = styled.div`
  flex: 0 0 calc((100% - ${COLUMN_GAP}px) / ${COLUMN_COUNT});
  background-color: ${({
    theme: {
      colors: { background },
    },
  }) => background};
  border-radius: ${({
    theme: {
      borderRadius: { medium },
    },
  }) => medium};
  padding: ${({
    theme: {
      padding: { large },
    },
  }) => large};
  box-shadow: 0 5px 5px
    ${({
      theme: {
        colors: { taskBoxShadow },
      },
    }) => taskBoxShadow};
  margin: 0 10px;
  &.dragging {
    opacity: 0.5;
  }
  height: fit-content;
  margin-top: 40px;

  @media (max-width: ${({
      theme: {
        breakpoints: { md },
      },
    }) => md}) {
    flex: 0 0 100%;
    margin: 10px 0;
    background-color: ${({
      theme: {
        colors: { mobileCoulmnBackground },
      },
    }) => mobileCoulmnBackground};
  }
`;

export const ColumnTitleBar = styled.div<ColumnTitleBarProps>`
  position: relative;
  display: flex;
  justify-content: space-between;
  background-color: ${({ titleColor }) => titleColor};
  border-radius: ${({
    theme: {
      borderRadius: { medium },
    },
  }) => medium};
  padding: ${({
    theme: {
      padding: { columnTitleBar },
    },
  }) => columnTitleBar};
  align-items: center;
  margin-bottom: 20px;
  cursor: grab;
`;

export const ColumnTitle = styled.h2`
  font-size: ${({
    theme: {
      fontSizes: { large },
    },
  }) => large};
  font-weight: ${({
    theme: {
      fontWeights: { semiBold },
    },
  }) => semiBold};
  color: ${({
    theme: {
      colors: { textSecondary },
    },
  }) => textSecondary};
  margin: 0;
`;

export const ActionButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const AddButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${({
    theme: {
      colors: { textSecondary },
    },
  }) => textSecondary};
  cursor: pointer;
  font-size: ${({
    theme: {
      fontSizes: { large },
    },
  }) => large};
  padding: ${({
    theme: {
      padding: { addButton },
    },
  }) => addButton};
  border-radius: ${({
    theme: {
      borderRadius: { small },
    },
  }) => small};
`;

export const MoreIconWrapper = styled.div`
  cursor: pointer;
  color: ${({
    theme: {
      colors: { textSecondary },
    },
  }) => textSecondary};
`;

export const CountCircle = styled.span<ColumnTitleBarProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${({
    theme: {
      colors: { textSecondary },
    },
  }) => textSecondary};
  color: ${({ titleColor }) => lightedHex(titleColor, 0.5)};
  width: 24px;
  height: 24px;
  border-radius: 50%;
  font-size: ${({
    theme: {
      fontSizes: { small },
    },
  }) => small};
  margin-left: 8px;
  border: 1px solid
    ${({
      theme: {
        colors: { taskBorder },
      },
    }) => taskBorder};
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
