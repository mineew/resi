import { act, renderHook } from '@testing-library/react';

import sleep from '@/utils/misc/sleep';

import useDebouncedState from './useDebouncedState';

describe('@/utils/hooks/useDebouncedState', () => {
  it('should debounce state updates', async () => {
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    const defaultValue: number = 100;
    const notify = vi.fn();
    const wait = 300;

    const { result } = renderHook(() =>
      useDebouncedState(defaultValue, notify, wait),
    );

    act(() => {
      const [, setState] = result.current;
      setState(150);
      setState(200);
      setState(300);
    });

    await act(() => sleep(wait + 1));

    expect(result.current[0]).toBe(300);
    expect(notify).toHaveBeenCalledTimes(1);
  });
});
