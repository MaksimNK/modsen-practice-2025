import { DragEvent } from 'react';

interface IUseDragAndDropProps {
  dragType: string;
  onDrop: (data: string, event: DragEvent<HTMLDivElement>) => void;
}

export const useDragAndDrop = ({ dragType, onDrop }: IUseDragAndDropProps) => {
  const handleDragStart = (e: DragEvent<HTMLDivElement>, data: string) => {
    e.dataTransfer.setData(dragType, data);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const data = e.dataTransfer.getData(dragType);
    onDrop(data, e);
  };

  return { handleDragOver, handleDrop, handleDragStart };
};
