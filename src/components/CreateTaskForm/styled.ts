import styled from 'styled-components';

export const Form = styled.form`
  border-radius: ${(props) => props.theme.borderRadius.medium};
  background-color: ${(props) => props.theme.colors.taskBackground};
  border: 1px solid ${(props) => props.theme.colors.taskBorder};
  padding: ${(props) => props.theme.padding.taskItem};
  margin-bottom: 10px;
  box-shadow: ${(props) => props.theme.boxShadow.taskItem};
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const InputTitle = styled.input`
  font-size: ${(props) => props.theme.fontSizes.taskTitle};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.taskTitle};
  border: none;
  outline: none;
  border-bottom: 1px solid transparent;
  margin: 0;
  transition: border-bottom-color 0.3s ease;
  &:focus {
    border-bottom-color: #000;
  }
  &::placeholder {
    color: ${(props) => props.theme.colors.taskTitle};
  }
`;
export const InputDescription = styled.input`
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.taskDescription};
  border: none;
  border-bottom: 1px solid transparent;
  outline: none;
  margin: 0;
  transition: border-bottom-color 0.3s ease;
  &:focus {
    border-bottom-color: #000;
  }
  &::placeholder {
    color: ${(props) => props.theme.colors.taskDescription};
  }
`;

export const PrioritySelect = styled.select`
  width: fit-content;
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.small};
  padding: ${(props) => props.theme.padding.small};
  border-radius: ${(props) => props.theme.borderRadius.priority};
  margin-top: 5px;
  display: inline-block;
  border: none;
  appearance: none;
  background-color: ${(props) => {
    switch (props.value) {
      case 'high':
        return props.theme.colors.priorityHigh;
      case 'medium':
        return props.theme.colors.priorityMediumBackground;
      case 'low':
        return props.theme.colors.priorityLow;
      default:
        return props.theme.colors.priorityDefault;
    }
  }};
  color: ${(props) => {
    switch (props.value) {
      case 'high':
        return props.theme.colors.priorityHighText;
      case 'medium':
        return props.theme.colors.priorityMediumText;
      case 'low':
        return props.theme.colors.priorityLowText;
      default:
        return props.theme.colors.textSecondary;
    }
  }};
`;

export const SaveButton = styled.button`
  color: #475569;
  background-color: transparent;
  border: none;
  font-size: ${(props) => props.theme.fontSizes.taskTitle};
`;

export const ErrorMessage = styled.p`
  color: ${(props) => props.theme.colors.priorityHigh};
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: ${(props) => props.theme.fontWeights.medium};
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;
