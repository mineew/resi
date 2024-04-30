import katext from 'katex';

interface FormulaProps {
  a: number;
  b: number;
}

function Formula(props: FormulaProps) {
  const { a, b } = props;
  let formula = 'y=';

  if (a) {
    formula += `${a}x`;
  }

  if (b && b > 0) {
    formula += a ? `+${b}` : b;
  }

  if (b && b < 0) {
    formula += b;
  }

  if (!a && !b) {
    return null;
  }

  return (
    <div
      dangerouslySetInnerHTML={{
        // eslint-disable-next-line import/no-named-as-default-member
        __html: katext.renderToString(formula),
      }}
    />
  );
}

export default Formula;
