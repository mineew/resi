import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import Drawer from './Drawer';

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

describe('@/components/ui/Drawer', () => {
  it('renders', async () => {
    const user = userEvent.setup();

    render(
      <Drawer trigger={<button type="button">Open Drawer</button>}>
        <p>Drawer Content</p>
      </Drawer>,
    );

    const trigger = screen.getByRole('button');
    await user.click(trigger);

    const drawer = screen.getByRole('dialog');
    expect(drawer).toBeInTheDocument();
  });

  it('can display tooltip', async () => {
    const user = userEvent.setup();

    render(
      <Drawer
        trigger={<button type="button">Open Dialog</button>}
        tooltip="Drawer Trigger Tooltip"
      >
        <p>Drawer Content</p>
      </Drawer>,
    );

    const button = screen.getByRole('button');
    await user.hover(button);

    const tooltip = screen.getByRole('tooltip');
    expect(tooltip).toHaveTextContent('Drawer Trigger Tooltip');
  });
});
