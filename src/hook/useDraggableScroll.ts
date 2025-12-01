import { useCallback, useRef } from 'react';

interface UseDraggableScrollReturn {
  ref: React.RefObject<HTMLDivElement>;
  onMouseDown: (e: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onMouseUp: () => void;
  onMouseMove: (e: React.MouseEvent) => void;
  onTouchStart: (e: React.TouchEvent) => void;
  onTouchMove: (e: React.TouchEvent) => void;
  onTouchEnd: () => void;
}

export default function useDraggableScroll(): UseDraggableScrollReturn {
  const ref = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    isDragging.current = true;
    startX.current = e.pageX - ref.current.offsetLeft;
    scrollLeft.current = ref.current.scrollLeft;
    ref.current.style.cursor = 'grabbing';
  }, []);

  const onMouseLeave = useCallback(() => {
    isDragging.current = false;
    if (ref.current) {
      ref.current.style.cursor = 'grab';
    }
  }, []);

  const onMouseUp = useCallback(() => {
    isDragging.current = false;
    if (ref.current) {
      ref.current.style.cursor = 'grab';
    }
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current || !ref.current) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    ref.current.scrollLeft = scrollLeft.current - walk;
  }, []);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    if (!ref.current) return;
    isDragging.current = true;
    startX.current = e.touches[0].pageX - ref.current.offsetLeft;
    scrollLeft.current = ref.current.scrollLeft;
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging.current || !ref.current) return;
    e.preventDefault();
    const x = e.touches[0].pageX - ref.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    ref.current.scrollLeft = scrollLeft.current - walk;
  }, []);

  const onTouchEnd = useCallback(() => {
    isDragging.current = false;
  }, []);

  return {
    ref,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onMouseMove,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
}
