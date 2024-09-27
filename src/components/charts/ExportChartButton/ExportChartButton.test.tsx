import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import ExportChartButton from './ExportChartButton';

const mocks = vi.hoisted(() => ({
  exportChartToPng: vi.fn(),
}));

vi.mock('@/utils/chart-export/exportChartToPng', () => ({
  default: mocks.exportChartToPng,
}));

describe('@/components/charts/ExportChartButton', () => {
  it('renders', async () => {
    const user = userEvent.setup();
    const chartWrapper = document.createElement('div');

    render(
      <ExportChartButton chartWrapper={chartWrapper} filename="image.png" />,
    );

    const trigger = screen.getByRole('button');
    await user.click(trigger);

    const menu = screen.getByRole('menu');
    expect(menu).toBeInTheDocument();

    const menuItems = screen.getAllByRole('menuitem');
    expect(menuItems).toHaveLength(3);
    expect(menuItems[0]).toBeInTheDocument();
    expect(menuItems[1]).toBeInTheDocument();
    expect(menuItems[2]).toBeInTheDocument();
  });

  it('can export a chart', async () => {
    const user = userEvent.setup();
    const chartWrapper = document.createElement('div');

    render(
      <ExportChartButton chartWrapper={chartWrapper} filename="image.png" />,
    );

    const trigger = screen.getByRole('button');

    await user.click(trigger);
    let menuItems = screen.getAllByRole('menuitem');

    await user.click(menuItems[0]);
    expect(mocks.exportChartToPng).toHaveBeenCalledTimes(1);
    expect(mocks.exportChartToPng).toHaveBeenLastCalledWith(
      chartWrapper,
      'image.png',
      1,
    );

    await user.click(trigger);
    menuItems = screen.getAllByRole('menuitem');

    await user.click(menuItems[1]);
    expect(mocks.exportChartToPng).toHaveBeenCalledTimes(2);
    expect(mocks.exportChartToPng).toHaveBeenLastCalledWith(
      chartWrapper,
      'image.png',
      2,
    );

    await user.click(trigger);
    menuItems = screen.getAllByRole('menuitem');

    await user.click(menuItems[2]);
    expect(mocks.exportChartToPng).toHaveBeenCalledTimes(3);
    expect(mocks.exportChartToPng).toHaveBeenLastCalledWith(
      chartWrapper,
      'image.png',
      3,
    );
  });
});
