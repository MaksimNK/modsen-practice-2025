import styled from 'styled-components';

export const TaskItem = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.taskBackground};
  border-radius: ${(props) => props.theme.borderRadius.taskItem};
  padding: ${(props) => props.theme.padding.taskItem};
  margin-bottom: 10px;
  box-shadow: ${(props) => props.theme.boxShadow.taskItem};
  cursor: grab;
  border: 1px solid ${(props) => props.theme.colors.taskBorder};
  height: fit-content;
`;

export const TaskTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.taskTitle};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.taskTitle};
  margin: 0 0 5px 0;
`;

export const TaskDescription = styled.p`
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.taskDescription};
  margin: 0;
`;
export const TaskPriority = styled.span`
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.textSecondary};
  background-color: ${(props) => props.theme.colors.priorityDefault};
  padding: ${(props) => props.theme.padding.small};
  border-radius: ${(props) => props.theme.borderRadius.priority};
  margin-top: 5px;
  display: inline-block;

  &.high {
    background-color: ${(props) => props.theme.colors.priorityHigh};
    color: ${(props) => props.theme.colors.priorityHighText};
  }

  &.medium {
    background-color: ${(props) => props.theme.colors.priorityMediumBackground};
    color: ${(props) => props.theme.colors.priorityMediumText};
  }

  &.low {
    background-color: ${(props) => props.theme.colors.priorityLow};
    color: ${(props) => props.theme.colors.priorityLowText};
  }
`;

export const TaskItemStyled = styled(TaskItem)`
  &.dragging {
    box-shadow: ${(props) => props.theme.boxShadow.taskDragging};
    cursor: grabbing;
    border: ${(props) => props.theme.border.taskDragging} ${(props) => props.theme.colors.taskDraggingBorder};
    z-index: 100;
  }
`;

export const MoreButtonStyled = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: ${(props) => props.theme.colors.textPrimary};
`;