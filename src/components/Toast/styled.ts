import styled, { css, keyframes } from 'styled-components';

const slideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const TOAST_Z_INDEX = 1000;
const TOAST_MAX_WIDTH = '300px';
const TOAST_MESSAGE_MAX_WIDTH = '250px';
const CLOSE_BUTTON_MARGIN_LEFT = '10px';

export const ToastWrapper = styled.div`
  position: fixed;
  top: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: ${TOAST_Z_INDEX};
`;

export const ToastContainer = styled.div<{
  type?: 'success' | 'failure' | 'warning';
}>`
  background-color: ${({
    theme: {
      colors: { toastDefaultBackground },
    },
  }) => toastDefaultBackground};
  border-radius: ${({
    theme: {
      radii: { tiny },
    },
  }) => tiny};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: ${TOAST_MAX_WIDTH};
  margin: ${({
    theme: {
      spacing: { tiny },
    },
  }) => tiny};
  animation: ${slideUp} 0.5s ease-in-out;

  ${({ type }) =>
    type === 'success' &&
    css`
      color: ${({
        theme: {
          colors: { toastSuccessText },
        },
      }) => toastSuccessText};
      background-color: ${({
        theme: {
          colors: { toastSuccessBackground },
        },
      }) => toastSuccessBackground};
    `}

  ${({ type }) =>
    type === 'failure' &&
    css`
      color: ${({
        theme: {
          colors: { toastFailureText },
        },
      }) => toastFailureText};
      background-color: ${({
        theme: {
          colors: { toastFailureBackground },
        },
      }) => toastFailureBackground};
    `}

  ${({ type }) =>
    type === 'warning' &&
    css`
      color: ${({
        theme: {
          colors: { toastWarningText },
        },
      }) => toastWarningText};
      background-color: ${({
        theme: {
          colors: { toastWarningBackground },
        },
      }) => toastWarningBackground};
    `}
`;

export const ToastMessage = styled.div`
  display: flex;
  align-items: flex-start;
  max-width: ${TOAST_MESSAGE_MAX_WIDTH};
  min-width: 0;
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-break: break-word;
  overflow: hidden;
  text-align: center;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: ${({
    theme: {
      fontSizes: { large },
    },
  }) => large};
  color: inherit;
  margin-left: ${CLOSE_BUTTON_MARGIN_LEFT};
`;
