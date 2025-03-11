import styled from 'styled-components';

const MODAL_Z_INDEX = 1000;
const MODAL_CONTENT_MAX_WIDTH = '90%';
const MODAL_CONTENT_MAX_HEIGHT = '90%';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({
    theme: {
      colors: { modalOverlayBackground },
    },
  }) => modalOverlayBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${MODAL_Z_INDEX};
`;

export const ModalContent = styled.div`
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
  box-shadow: ${({
    theme: {
      boxShadow: { taskItem },
    },
  }) => taskItem};
  max-width: ${MODAL_CONTENT_MAX_WIDTH};
  max-height: ${MODAL_CONTENT_MAX_HEIGHT};
  overflow: auto;
`;
