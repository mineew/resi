import { useCallback, useState } from 'react';

function useReferenceOver() {
  const [offsetOver, setOffsetOver] = useState<'left' | 'right' | null>(null);

  const handleEnterOffsetLeft = useCallback(() => {
    setOffsetOver('left');
  }, []);

  const handleEnterOffsetRight = useCallback(() => {
    setOffsetOver('right');
  }, []);

  const handleLeaveOffset = useCallback(() => {
    setOffsetOver(null);
  }, []);

  return {
    offsetOver,
    handleEnterOffsetLeft,
    handleEnterOffsetRight,
    handleLeaveOffset,
  };
}

export default useReferenceOver;
