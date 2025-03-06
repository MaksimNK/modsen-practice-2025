import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 300px;
  margin: 1rem auto;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: ${(props) => props.theme.boxShadow.taskItem};
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    margin: 0;
    padding: 0;
  }
`;

export const TextInput = styled.input.attrs({ type: 'text' })`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const ColorInput = styled.input.attrs({ type: 'color' })`
  padding: 0;
  width: 50px;
  height: 50px;
  border: none;
  background: none;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 0.9rem;
  margin-top: -0.5rem;
  margin-bottom: 0.5rem;
`;
