import { useRef, RefObject } from 'react';

export const useDragScroll = (scrollRef: RefObject<HTMLDivElement>) => {
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  let tempX;
  let tempScroll;

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDown.current = true;
    tempX = e.pageX;
    startX.current = tempX - scrollRef.current.offsetLeft;
    tempScroll = scrollRef.current.scrollLeft;
    scrollLeft.current = tempScroll;
  };

  const handleMouseLeaveOrUp = () => {
    isDown.current = false;
    scrollRef.current.style.cursor = 'default';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !scrollRef.current) return;
    e.preventDefault();
    scrollRef.current.style.cursor = 'grabbing';
    const dx = e.pageX - scrollRef.current.offsetLeft;
    const distance = dx - startX.current;
    scrollRef.current.scrollLeft = scrollLeft.current - distance;
  };

  return {
    handleMouseDown,
    handleMouseLeaveOrUp,
    handleMouseMove,
  };
};
