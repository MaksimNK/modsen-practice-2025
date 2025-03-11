import styled from 'styled-components';

export const Form = styled.form`
  border-radius: ${({
    theme: {
      borderRadius: { medium },
    },
  }) => medium};
  background-color: ${({
    theme: {
      colors: { taskBackground },
    },
  }) => taskBackground};
  border: 1px solid
    ${({
      theme: {
        colors: { taskBorder },
      },
    }) => taskBorder};
  padding: ${({
    theme: {
      padding: { taskItem },
    },
  }) => taskItem};
  margin-bottom: ${({
    theme: {
      spacing: { medium },
    },
  }) => medium};
  box-shadow: ${({
    theme: {
      boxShadow: { taskItem },
    },
  }) => taskItem};
  display: flex;
  flex-direction: column;
  gap: ${({
    theme: {
      spacing: { medium },
    },
  }) => medium};
`;

export const InputTitle = styled.input`
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
  border: none;
  outline: none;
  border-bottom: 1px solid transparent;
  margin: 0;
  transition: border-bottom-color 0.3s ease;
  &:focus {
    border-bottom-color: #000;
  }
  &::placeholder {
    color: ${({
      theme: {
        colors: { taskTitle },
      },
    }) => taskTitle};
  }
`;

export const InputDescription = styled.input`
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
  border: none;
  border-bottom: 1px solid transparent;
  outline: none;
  margin: 0;
  transition: border-bottom-color 0.3s ease;
  &:focus {
    border-bottom-color: #000;
  }
  &::placeholder {
    color: ${({
      theme: {
        colors: { taskDescription },
      },
    }) => taskDescription};
  }
`;

export const PrioritySelect = styled.select`
  width: fit-content;
  text-align: center;
  font-size: ${({
    theme: {
      fontSizes: { small },
    },
  }) => small};
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
  border: none;
  appearance: none;
  background-color: ${({
    theme: {
      colors: {
        priorityHigh,
        priorityMediumBackground,
        priorityLow,
        priorityDefault,
      },
    },
    value,
  }) => {
    switch (value) {
      case 'high':
        return priorityHigh;
      case 'medium':
        return priorityMediumBackground;
      case 'low':
        return priorityLow;
      default:
        return priorityDefault;
    }
  }};
  color: ${({
    theme: {
      colors: {
        priorityHighText,
        priorityMediumText,
        priorityLowText,
        textSecondary,
      },
    },
    value,
  }) => {
    switch (value) {
      case 'high':
        return priorityHighText;
      case 'medium':
        return priorityMediumText;
      case 'low':
        return priorityLowText;
      default:
        return textSecondary;
    }
  }};
`;

export const SaveButton = styled.button`
  color: ${({
    theme: {
      colors: { hoverBlue },
    },
  }) => hoverBlue};
  background-color: transparent;
  border: none;
  font-size: ${({
    theme: {
      fontSizes: { taskTitle },
    },
  }) => taskTitle};
`;

export const ErrorMessage = styled.p`
  color: ${({
    theme: {
      colors: { priorityHigh },
    },
  }) => priorityHigh};
  font-size: ${({
    theme: {
      fontSizes: { small },
    },
  }) => small};
  font-weight: ${({
    theme: {
      fontWeights: { medium },
    },
  }) => medium};
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({
    theme: {
      spacing: { small },
    },
  }) => small};
`;
