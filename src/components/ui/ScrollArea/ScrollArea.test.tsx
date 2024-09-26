import { render, screen } from '@testing-library/react';

import ScrollArea from './ScrollArea';

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
