import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import AppLayout from './AppLayout';

describe('@/components/layout/AppLayout', () => {
  it('renders', () => {
    render(
      <AppLayout
        fileList={<div>File List</div>}
        fileChart={<div>File Chart</div>}
        diffChart={<div>File Diff Chart</div>}
        growthChart={<div>File Growth Chart</div>}
      />,
    );

    const layout = screen.getByTestId('app-layout');
    expect(layout).toBeInTheDocument();

    const fileList = screen.getByText('File List');
    expect(fileList).toBeInTheDocument();

    const fileChart = screen.getByText('File Chart');
    expect(fileChart).toBeInTheDocument();

    const diffChart = screen.getByText('File Diff Chart');
    expect(diffChart).toBeInTheDocument();

    const growthChart = screen.getByText('File Growth Chart');
    expect(growthChart).toBeInTheDocument();
  });

  it('can toggle sidebar', async () => {
    render(
      <AppLayout
        fileList={<div>File List</div>}
        fileChart={<div>File Chart</div>}
        diffChart={<div>File Diff Chart</div>}
        growthChart={<div>File Growth Chart</div>}
      />,
    );

    const expandedButton = screen.getByRole('button', { expanded: true });
    expect(expandedButton).toBeInTheDocument();

    await userEvent.click(expandedButton);

    const collapsedButton = screen.getByRole('button', { expanded: false });
    expect(collapsedButton).toBeInTheDocument();
  });
});
