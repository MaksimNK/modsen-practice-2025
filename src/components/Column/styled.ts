import styled from 'styled-components';

interface ColumnTitleBarProps {
  titleColor: string;
}
export const AddTask = styled.div`
  padding: 10px;
  color: #999;
  cursor: pointer;
  background-color: #fff;
  border-radius: 30px;
  padding: 15px;
  margin-bottom: 10px;
  box-shadow: 0 1px 2px #0000001A; 
`;
export const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 250px;
`;

export const ColumnContainer = styled.div`
  width: calc(100% / 3.5);
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px #0000001A;
  min-width: 280px;
  &.dragging {
    opacity: 0.5; /* Add visual feedback for dragging */
  }
  cursor: grab;
  draggable: true;
`;
export const ColumnTitleBar = styled.div<ColumnTitleBarProps>`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.titleColor};
  border-radius: 30px;
  padding: 10px;
  align-items: center;
  margin-bottom: 20px;
`;

export const ColumnTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

export const AddButton = styled.button`
  background-color: transparent;
  border: none;
  color: #666;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 5px 10px;
  border-radius: 4px;

  &:hover {
    color: #007bff;
  }
`;
