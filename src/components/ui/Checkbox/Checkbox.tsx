import * as Radix from '@radix-ui/react-checkbox';
import classNames from 'classnames';
import { Check } from 'lucide-react';
import { useId } from 'react';

import styles from './Checkbox.module.css';

interface CheckboxProps {
  id?: string;
  label: string;
  hasBoldLabel?: boolean;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  size?: 'default' | 'small';
}

function Checkbox(props: CheckboxProps) {
  const {
    id: providedId,
    label,
    hasBoldLabel = false,
    checked,
    onCheckedChange,
    size = 'default',
  } = props;

  const defaultId = useId();
  const id = providedId || defaultId;

  return (
    <div className={classNames(styles.wrapper, styles[size])}>
      <Radix.Root
        className={styles.root}
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
      >
        <Radix.Indicator className={styles.indicator} forceMount>
          <Check className={styles.icon} strokeWidth={3} />
        </Radix.Indicator>
      </Radix.Root>

      <label
        className={classNames(styles.label, {
          [styles.bold]: hasBoldLabel,
        })}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
