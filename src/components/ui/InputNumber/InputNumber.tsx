import type { ReactNode, Ref } from 'react';
import { useTranslation } from 'react-i18next';
import { useIMask } from 'react-imask';

import Input from '@/components/ui/Input/Input';

interface InputNumberProps {
  min?: number;
  max?: number;
  help?: string;
  label?: string;
  invalid?: boolean;
  typedValue?: number;
  placeholder?: string;
  rightElement?: ReactNode;
  onValueChange?: (typedValue: number, unmaskedValue: string) => void;
}

function InputNumber(props: InputNumberProps) {
  const {
    min,
    max,
    help,
    label,
    invalid,
    typedValue,
    placeholder,
    rightElement,
    onValueChange,
  } = props;

  const { i18n } = useTranslation();

  const { ref } = useIMask(
    {
      min,
      max,
      scale: 0,
      mask: Number,
      thousandsSeparator: i18n.language === 'en' ? ',' : ' ',
    },
    {
      defaultTypedValue: typedValue,
      onAccept: (_, maskRef) => {
        onValueChange?.(maskRef.typedValue, maskRef.unmaskedValue);
      },
    },
  );

  return (
    <Input
      help={help}
      label={label}
      invalid={invalid}
      placeholder={placeholder}
      rightElement={rightElement}
      ref={ref as Ref<HTMLInputElement>}
    />
  );
}

export default InputNumber;
