import classNames from 'classnames';
import {
  forwardRef,
  useId,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react';

import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  rightElement?: ReactNode;
  help?: string;
  invalid?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    className,
    id: providedId,
    type = 'text',
    disabled,
    label,
    rightElement,
    help,
    invalid = false,
    ...otherProps
  } = props;

  const defaultId = useId();
  const id = providedId || defaultId;

  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.invalid]: invalid,
      })}
    >
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
          aria-invalid={invalid}
          {...otherProps}
        />

        {rightElement && <div className={styles.right}>{rightElement}</div>}
      </div>

      {help && <div className={styles.help}>{help}</div>}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
