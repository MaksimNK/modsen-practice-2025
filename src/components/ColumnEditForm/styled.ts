import styled from 'styled-components';

export const FormContainer = styled.form`
  background-color: ${(props) => props.theme.colors.backgroundBoard};
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const InputField = styled.input`
  padding: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.taskBorder};
  border-radius: 0.25rem;
`;

export const SaveButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme.colors.textPrimary};
  color: ${(props) => props.theme.colors.textSecondary};
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.colors.textTertiary};
  }
`;
