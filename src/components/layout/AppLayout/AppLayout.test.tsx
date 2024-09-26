import { render, screen } from '@testing-library/react';

import AppLayout from './AppLayout';

const mocks = vi.hoisted(() => ({
  useTranslation: vi.fn(() => ({
    i18n: { language: 'en' },
    t: (message: string) => message,
  })),
}));

vi.mock('react-i18next', () => ({
  useTranslation: mocks.useTranslation,
}));

describe('@/components/layout/AppLayout', () => {
  it('renders', () => {
    render(
      <AppLayout
        appToolbar={<div>App Toolbar</div>}
        fileList={<div>File List</div>}
        fileChart={<div>File Chart</div>}
        filesInit={<div>Files Init</div>}
        diffChart={<div>File Diff Chart</div>}
        growthChart={<div>File Growth Chart</div>}
      />,
    );

    const layout = screen.getByTestId('app-layout');
    expect(layout).toBeInTheDocument();

    const appToolbar = screen.queryAllByText('App Toolbar');
    expect(appToolbar[0]).toBeInTheDocument();
    expect(appToolbar[1]).toBeInTheDocument();

    const fileList = screen.getByText('File List');
    expect(fileList).toBeInTheDocument();

    const fileChart = screen.getByText('File Chart');
    expect(fileChart).toBeInTheDocument();

    const filesInit = screen.getByText('Files Init');
    expect(filesInit).toBeInTheDocument();

    const diffChart = screen.getByText('File Diff Chart');
    expect(diffChart).toBeInTheDocument();

    const growthChart = screen.getByText('File Growth Chart');
    expect(growthChart).toBeInTheDocument();
  });
});
