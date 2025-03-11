import styled from 'styled-components';

const FORM_WIDTH = '300px';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({
    theme: {
      spacing: { medium },
    },
  }) => medium};
  width: ${FORM_WIDTH};
  margin: ${({
      theme: {
        spacing: { medium },
      },
    }) => medium}
    auto;
  padding: ${({
    theme: {
      spacing: { medium },
    },
  }) => medium};
  background-color: ${({
    theme: {
      colors: { formBackground },
    },
  }) => formBackground};
  border-radius: ${({
    theme: {
      borderRadius: { small },
    },
  }) => small};
  box-shadow: ${({
    theme: {
      boxShadow: { taskItem },
    },
  }) => taskItem};
  @media (max-width: ${({
      theme: {
        breakpoints: { md },
      },
    }) => md}) {
    margin: 0;
    padding: 0;
  }
`;

export const TextInput = styled.input.attrs({ type: 'text' })`
  padding: ${({
    theme: {
      spacing: { small },
    },
  }) => small};
  font-size: ${({
    theme: {
      fontSizes: { medium },
    },
  }) => medium};
  border: 1px solid
    ${({
      theme: {
        colors: { taskBorder },
      },
    }) => taskBorder};
  border-radius: ${({
    theme: {
      borderRadius: { tiny },
    },
  }) => tiny};
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({
      theme: {
        colors: { hoverBlue },
      },
    }) => hoverBlue};
  }
`;

export const ColorInput = styled.input.attrs({ type: 'color' })`
  padding: 0;
  width: ${({
    theme: {
      sizes: { colorInputSize },
    },
  }) => colorInputSize};
  height: ${({
    theme: {
      sizes: { colorInputSize },
    },
  }) => colorInputSize};
  border: none;
  background: none;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  padding: ${({
      theme: {
        spacing: { small },
      },
    }) => small}
    ${({
      theme: {
        spacing: { large },
      },
    }) => large};
  font-size: ${({
    theme: {
      fontSizes: { large },
    },
  }) => large};
  font-weight: bold;
  background-color: ${({
    theme: {
      colors: { hoverBlue },
    },
  }) => hoverBlue};
  color: ${({
    theme: {
      colors: { textSecondary },
    },
  }) => textSecondary};
  border: none;
  border-radius: ${({
    theme: {
      borderRadius: { tiny },
    },
  }) => tiny};
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({
      theme: {
        colors: { hoverBlue },
      },
    }) => hoverBlue};
    filter: brightness(0.9);
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: ${({
    theme: {
      fontSizes: { error },
    },
  }) => error};
  margin-top: ${({
    theme: {
      spacing: { negativeSmall },
    },
  }) => negativeSmall};
  margin-bottom: ${({
    theme: {
      spacing: { small },
    },
  }) => small};
`;
