import { render, screen } from '@testing-library/react';

import { commonMocks } from '~/vitest.mocks.hoisted';

import Formula from './Formula';

describe('@/components/ui/Formula', () => {
  it('renders in EN locale', () => {
    commonMocks.useTranslation.mockReturnValue({
      i18n: { language: 'en' },
    });

    render(<Formula a={3.65} b={7.12} />);
    const formulaElement = screen.getByText('y=3.65x+7.12');

    expect(formulaElement).toMatchInlineSnapshot(`
      <annotation
        encoding="application/x-tex"
      >
        y=3.65x+7.12
      </annotation>
    `);
  });

  it('renders in RU locale', () => {
    commonMocks.useTranslation.mockReturnValue({
      i18n: { language: 'ru' },
    });

    render(<Formula a={3.65} b={7.12} />);
    const formulaElement = screen.getByText('y=3{,}65x+7{,}12');

    expect(formulaElement).toMatchInlineSnapshot(`
      <annotation
        encoding="application/x-tex"
      >
        y=3{,}65x+7{,}12
      </annotation>
    `);
  });

  it('renders with negative values', () => {
    commonMocks.useTranslation.mockReturnValue({
      i18n: { language: 'en' },
    });

    render(<Formula a={-8.71} b={-3.12} />);
    const formulaElement = screen.getByText('y=-8.71x-3.12');

    expect(formulaElement).toMatchInlineSnapshot(`
      <annotation
        encoding="application/x-tex"
      >
        y=-8.71x-3.12
      </annotation>
    `);
  });

  it('renders with partial values', () => {
    commonMocks.useTranslation.mockReturnValue({
      i18n: { language: 'en' },
    });

    render(<Formula a={8} b={0} />);

    const formulaElement1 = screen.getByText('y=8x');
    expect(formulaElement1).toMatchInlineSnapshot(`
      <annotation
        encoding="application/x-tex"
      >
        y=8x
      </annotation>
    `);

    render(<Formula a={0} b={4} />);

    const formulaElement2 = screen.getByText('y=4');
    expect(formulaElement2).toMatchInlineSnapshot(`
      <annotation
        encoding="application/x-tex"
      >
        y=4
      </annotation>
    `);
  });

  it('renders without values', () => {
    commonMocks.useTranslation.mockReturnValue({
      i18n: { language: 'en' },
    });

    const { container } = render(<Formula a={0} b={0} />);
    expect(container).toBeEmptyDOMElement();
  });
});
