import styled from 'styled-components';

export const TaskItem = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 30px;
  padding: 15px;
  margin-bottom: 10px;
  box-shadow: 0 1px 2px #0000001A;
  cursor: grab;
  border: 1px solid #eee;
`;

export const TaskTitle = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  margin: 0 0 5px 0;
`;

export const TaskDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 0;
`;

export const TaskPriority = styled.span`
  font-size: 0.8rem;
  color: #fff;
  background-color: #ffc107;
  padding: 3px 6px;
  border-radius: 30px;
  margin-top: 5px;
  display: inline-block; 

  &.high {
    background-color: #dc3545; 
  }

  &.medium {
    background-color: #EEF2FF;
    color: #4F46E5;
  }

  &.low {
    background-color: #28a745;
  }
`;

export const TaskItemStyled = styled(TaskItem)`
  &.dragging {
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    cursor: grabbing;
    border: 1px dashed #ccc;
  }
`;

export const MoreButtonStyled = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
`;
