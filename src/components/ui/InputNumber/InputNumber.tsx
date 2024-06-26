import { type ReactNode, type Ref } from 'react';
import { useTranslation } from 'react-i18next';
import { useIMask } from 'react-imask';

import Input from '@/components/ui/Input/Input';

interface InputNumberProps {
  label?: string;
  placeholder?: string;
  typedValue?: number;
  onValueChange?: (typedValue: number, unmaskedValue: string) => void;
  min?: number;
  max?: number;
  rightElement?: ReactNode;
  help?: string;
  invalid?: boolean;
}

function InputNumber(props: InputNumberProps) {
  const {
    label,
    placeholder,
    typedValue,
    onValueChange,
    min,
    max,
    rightElement,
    help,
    invalid,
  } = props;

  const { i18n } = useTranslation();

  const { ref } = useIMask(
    {
      mask: Number,
      min,
      max,
      thousandsSeparator: i18n.language === 'en' ? ',' : ' ',
      scale: 0,
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
      ref={ref as Ref<HTMLInputElement>}
      label={label}
      placeholder={placeholder}
      rightElement={rightElement}
      help={help}
      invalid={invalid}
    />
  );
}

export default InputNumber;
