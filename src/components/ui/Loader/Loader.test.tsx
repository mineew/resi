import { render, screen } from '@testing-library/react';

import Loader from './Loader';

describe('@/components/ui/Loader', () => {
  it('renders', () => {
    render(<Loader />);

    const loader = screen.getByRole('status', { busy: true });
    expect(loader).toBeInTheDocument();
  });
});
