import { render, screen } from '@testing-library/react';

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

    const fileList = screen.getByText('File List');
    expect(fileList).toBeInTheDocument();

    const fileChart = screen.getByText('File Chart');
    expect(fileChart).toBeInTheDocument();

    const diffChart = screen.getByText('File Diff Chart');
    expect(diffChart).toBeInTheDocument();

    const growthChart = screen.getByText('File Growth Chart');
    expect(growthChart).toBeInTheDocument();
  });
});
