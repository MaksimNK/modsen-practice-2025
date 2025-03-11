import styled from 'styled-components';

export const TaskItem = styled.div`
  position: relative;
  background-color: ${({
    theme: {
      colors: { taskBackground },
    },
  }) => taskBackground};
  border-radius: ${({
    theme: {
      borderRadius: { taskItem },
    },
  }) => taskItem};
  padding: ${({
    theme: {
      padding: { taskItem },
    },
  }) => taskItem};
  margin-bottom: 10px;
  box-shadow: ${({
    theme: {
      boxShadow: { taskItem },
    },
  }) => taskItem};
  cursor: grab;
  border: 1px solid
    ${({
      theme: {
        colors: { taskBorder },
      },
    }) => taskBorder};
  height: fit-content;
`;

export const TaskTitle = styled.h3`
  font-size: ${({
    theme: {
      fontSizes: { taskTitle },
    },
  }) => taskTitle};
  font-weight: ${({
    theme: {
      fontWeights: { medium },
    },
  }) => medium};
  color: ${({
    theme: {
      colors: { taskTitle },
    },
  }) => taskTitle};
  margin: 0 0 5px 0;
`;

export const TaskDescription = styled.p`
  font-size: ${({
    theme: {
      fontSizes: { medium },
    },
  }) => medium};
  color: ${({
    theme: {
      colors: { taskDescription },
    },
  }) => taskDescription};
  margin: 0;
`;

export const TaskPriority = styled.span`
  font-size: ${({
    theme: {
      fontSizes: { small },
    },
  }) => small};
  color: ${({
    theme: {
      colors: { textSecondary },
    },
  }) => textSecondary};
  background-color: ${({
    theme: {
      colors: { priorityDefault },
    },
  }) => priorityDefault};
  padding: ${({
    theme: {
      padding: { small },
    },
  }) => small};
  border-radius: ${({
    theme: {
      borderRadius: { priority },
    },
  }) => priority};
  margin-top: 5px;
  display: inline-block;

  &.high {
    background-color: ${({
      theme: {
        colors: { priorityHigh },
      },
    }) => priorityHigh};
    color: ${({
      theme: {
        colors: { priorityHighText },
      },
    }) => priorityHighText};
  }

  &.medium {
    background-color: ${({
      theme: {
        colors: { priorityMediumBackground },
      },
    }) => priorityMediumBackground};
    color: ${({
      theme: {
        colors: { priorityMediumText },
      },
    }) => priorityMediumText};
  }

  &.low {
    background-color: ${({
      theme: {
        colors: { priorityLow },
      },
    }) => priorityLow};
    color: ${({
      theme: {
        colors: { priorityLowText },
      },
    }) => priorityLowText};
  }
`;

export const TaskItemStyled = styled(TaskItem)`
  &.dragging {
    box-shadow: ${({
      theme: {
        boxShadow: { taskDragging },
      },
    }) => taskDragging};
    cursor: grabbing;
    border: ${({
      theme: {
        border: { taskDragging },
      },
      theme: {
        colors: { taskDraggingBorder },
      },
    }) => `${taskDragging} ${taskDraggingBorder}`};
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
  color: ${({
    theme: {
      colors: { textPrimary },
    },
  }) => textPrimary};
`;
