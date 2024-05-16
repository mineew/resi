import { useCallback, useEffect, useRef, useState } from 'react';
import { useDebounce } from 'use-debounce';

function useDebouncedState<T>(
  defaultValue: T,
  notify?: (value: T) => void,
  wait = 300,
) {
  const [state, setState] = useState<T>(defaultValue);
  const called = useRef(false);
  const [stateDebounced] = useDebounce(state, wait);

  useEffect(() => {
    setState(defaultValue);
  }, [defaultValue]);

  const changeState = useCallback((value: T) => {
    setState(value);
    called.current = true;
  }, []);

  useEffect(() => {
    if (called.current) {
      notify?.(stateDebounced);
    }
  }, [notify, stateDebounced]);

  return [state, changeState] as const;
}

export default useDebouncedState;
