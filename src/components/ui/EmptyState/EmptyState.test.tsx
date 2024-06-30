import { render, screen } from '@testing-library/react';
import { Inbox } from 'lucide-react';

import EmptyState from './EmptyState';

describe('@/components/ui/EmptyState', () => {
  it('renders', () => {
    render(<EmptyState icon={<Inbox />}>Empty State Message</EmptyState>);

    const element = screen.getByText('Empty State Message');
    expect(element).toBeInTheDocument();
  });
});
