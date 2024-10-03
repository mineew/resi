import type { TFunction } from 'i18next';

const xTickFormatter = (t: TFunction) => (value: unknown) => {
  return t('UTILS.NUMBER', { value: Number(value) });
};

const yTickFormatter = (t: TFunction) => (value: unknown) => {
  return value ? t('UTILS.NUMBER', { value: Number(value) }) : '';
};

export { xTickFormatter, yTickFormatter };
