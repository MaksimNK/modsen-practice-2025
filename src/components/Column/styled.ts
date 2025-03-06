import styled from 'styled-components';
import { lightedHex } from '../../utils/lightenHex';

interface ColumnTitleBarProps {
  titleColor: string;
}

export const AddTaskWrapper = styled.div<ColumnTitleBarProps>`
  padding: ${(props) => props.theme.padding.addTaskWrapper};
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.taskBackground};
  border-radius: ${(props) => props.theme.borderRadius.addTaskWrapper};
  margin-bottom: 10px;
  box-shadow: 0 1px 2px ${(props) => props.theme.colors.taskBoxShadow};
`;

export const AddTask = styled.div<ColumnTitleBarProps>`
  color: ${(props) => props.titleColor};
  border-radius: ${(props) => props.theme.borderRadius.addTask};
  background-color: ${(props) => lightedHex(props.titleColor, 0.9)};
  padding: ${(props) => props.theme.padding.small};
  width: fit-content;
`;

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 250px;
`;

export const ColumnContainer = styled.div`
  flex: 0 0 calc((100% - 40px) / 3);
  background-color: ${(props) => props.theme.colors.background};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  padding: ${(props) => props.theme.padding.large};
  box-shadow: 0 5px 5px ${(props) => props.theme.colors.taskBoxShadow};
  margin: 0 10px;
  &.dragging {
    opacity: 0.5;
  }
  height: fit-content;
  margin-top: 40px;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex: 0 0 100%;
    margin: 10px 0;
    background-color: ${(props) => props.theme.colors.mobileCoulmnBackground};
  }
`;

export const ColumnTitleBar = styled.div<ColumnTitleBarProps>`
  position: relative;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.titleColor};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  padding: ${(props) => props.theme.padding.columnTitleBar};
  align-items: center;
  margin-bottom: 20px;
  cursor: grab;
`;

export const ColumnTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.textSecondary};
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
  color: ${(props) => props.theme.colors.textSecondary};
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSizes.xl};
  padding: ${(props) => props.theme.padding.addButton};
  border-radius: ${(props) => props.theme.borderRadius.small};
`;

export const MoreIconWrapper = styled.div`
  cursor: pointer;
  color: ${(props) => props.theme.colors.textSecondary};
`;

export const CountCircle = styled.span<ColumnTitleBarProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.textSecondary};
  color: ${(props) => lightedHex(props.titleColor, 0.5)};
  width: 24px;
  height: 24px;
  border-radius: 50%;
  font-size: ${(props) => props.theme.fontSizes.small};
  margin-left: 8px;
  border: 1px solid ${(props) => props.theme.colors.taskBorder};
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
