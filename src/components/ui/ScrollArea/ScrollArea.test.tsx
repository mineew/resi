import { render, screen } from '@testing-library/react';

import ScrollArea from './ScrollArea';

const ResizeObserverMock = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

beforeAll(() => {
  vi.stubGlobal('ResizeObserver', ResizeObserverMock);

  return () => {
    vi.unstubAllGlobals();
  };
});

describe('@/components/ui/ScrollArea', () => {
  it('renders', () => {
    render(
      <ScrollArea>
        <p>Scroll Area Content</p>
      </ScrollArea>,
    );

    const content = screen.getByText('Scroll Area Content');
    expect(content).toBeInTheDocument();
  });
});
