import * as Radix from '@radix-ui/react-radio-group';
import classNames from 'classnames';

import styles from './RadioGroup.module.css';
import RadioGroupItem, { type RadioGroupItemProps } from './RadioGroupItem';

interface RadioGroupProps {
  items: RadioGroupItemProps[];
  value: string;
  onValueChange: (value: string) => void;
  size?: 'default' | 'small';
}

function RadioGroup(props: RadioGroupProps) {
  const { items, value, onValueChange, size = 'default' } = props;

  return (
    <Radix.Root
      className={classNames(styles.root, styles[size])}
      value={value}
      onValueChange={onValueChange}
    >
      {items.map((item, idx) => (
        <RadioGroupItem key={`${item.value}-${idx}`} {...item} />
      ))}
    </Radix.Root>
  );
}

export default RadioGroup;
export type { RadioGroupItemProps as RadioGroupItem };
