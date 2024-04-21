import classNames from 'classnames';
import { type InputHTMLAttributes, type Ref, forwardRef, useId } from 'react';

import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

function _Input(props: InputProps, ref: Ref<HTMLInputElement>) {
  const {
    className,
    id: providedId,
    type = 'text',
    label,
    ...otherProps
  } = props;

  const defaultId = useId();
  const id = providedId || defaultId;

  return (
    <div className={styles.wrapper}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}

      <input
        className={classNames(className, styles.input)}
        id={id}
        type={type}
        ref={ref}
        {...otherProps}
      />
    </div>
  );
}

const Input = forwardRef(_Input);

export default Input;
