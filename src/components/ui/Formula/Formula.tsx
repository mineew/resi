import katext from 'katex';
import { useTranslation } from 'react-i18next';

interface FormulaProps {
  a: number;
  b: number;
}

function Formula(props: FormulaProps) {
  const { a, b } = props;
  const { i18n } = useTranslation();

  let aStr = a.toString();
  aStr = i18n.language === 'ru' ? aStr.replace('.', '{,}') : aStr;
  let bStr = b.toString();
  bStr = i18n.language === 'ru' ? bStr.replace('.', '{,}') : bStr;

  let formula = 'y=';

  if (a) {
    formula += `${aStr}x`;
  }

  if (b && b > 0) {
    formula += a ? `+${bStr}` : bStr;
  }

  if (b && b < 0) {
    formula += bStr;
  }

  if (!a && !b) {
    return null;
  }

  return (
    <div
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: katext.renderToString(formula),
      }}
    />
  );
}

export default Formula;
