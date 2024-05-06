import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

function useDebouncedState<T>(
  defaultValue: T,
  notify?: (value: T) => void,
  wait = 300,
) {
  const [state, setState] = useState<T>(defaultValue);
  const [stateDebounced] = useDebounce(state, wait);

  useEffect(() => {
    setState(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    notify?.(stateDebounced);
  }, [stateDebounced, notify]);

  return [state, setState] as const;
}

export default useDebouncedState;
