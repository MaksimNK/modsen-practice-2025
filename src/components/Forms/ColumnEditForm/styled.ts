import styled from 'styled-components';

export const FormContainer = styled.form`
  background-color: ${({
    theme: {
      colors: { backgroundBoard },
    },
  }) => backgroundBoard};
  padding: ${({
    theme: {
      spacing: { medium },
    },
  }) => medium};
  border-radius: ${({
    theme: {
      borderRadius: { medium },
    },
  }) => medium};
  display: flex;
  flex-direction: column;
  gap: ${({
    theme: {
      spacing: { small },
    },
  }) => small};
`;

export const InputField = styled.input`
  padding: ${({
    theme: {
      spacing: { small },
    },
  }) => small};
  border: 1px solid
    ${({
      theme: {
        colors: { taskBorder },
      },
    }) => taskBorder};
  border-radius: ${({
    theme: {
      borderRadius: { medium },
    },
  }) => medium};
`;

export const SaveButton = styled.button`
  padding: ${({
      theme: {
        spacing: { small },
      },
    }) => small}
    ${({
      theme: {
        spacing: { medium },
      },
    }) => medium};
  background-color: ${({
    theme: {
      colors: { textPrimary },
    },
  }) => textPrimary};
  color: ${({
    theme: {
      colors: { textSecondary },
    },
  }) => textSecondary};
  border: none;
  border-radius: ${({
    theme: {
      borderRadius: { medium },
    },
  }) => medium};
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: ${({
      theme: {
        colors: { textTertiary },
      },
    }) => textTertiary};
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: ${({
    theme: {
      fontSizes: { small },
    },
  }) => small};
  margin-top: 5px;
`;
