import { useRef, RefObject } from 'react';

export const useDragScroll = (scrollRef: RefObject<HTMLDivElement>) => {
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.target instanceof HTMLElement && e.target.closest('.drag-handle')) {
      return;
    }
    if (!scrollRef.current) return;
    isDown.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
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
