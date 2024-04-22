import classNames from 'classnames';
import {
  type InputHTMLAttributes,
  type ReactNode,
  type Ref,
  forwardRef,
  useId,
} from 'react';

import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  rightElement?: ReactNode;
}

function _Input(props: InputProps, ref: Ref<HTMLInputElement>) {
  const {
    className,
    id: providedId,
    type = 'text',
    disabled,
    label,
    rightElement,
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

      <div
        className={classNames(styles['input-wrapper'], {
          [styles.disabled]: disabled,
        })}
      >
        <input
          ref={ref}
          className={classNames(className, styles.input)}
          id={id}
          type={type}
          disabled={disabled}
          {...otherProps}
        />

        {rightElement && <div className={styles.right}>{rightElement}</div>}
      </div>
    </div>
  );
}

const Input = forwardRef(_Input);

export default Input;
