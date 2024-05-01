import classNames from 'classnames';
import { type ButtonHTMLAttributes, type Ref, forwardRef } from 'react';

import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'primary' | 'danger';
  size?: 'default' | 'small';
  fullWidth?: boolean;
  center?: boolean;
  outlined?: boolean;
  icon?: boolean;
}

function _Button(props: ButtonProps, ref: Ref<HTMLButtonElement>) {
  const {
    theme = 'primary',
    size = 'default',
    fullWidth = false,
    center = false,
    outlined = false,
    icon = false,
    className,
    type = 'button',
    ...otherProps
  } = props;

  return (
    <button
      ref={ref}
      className={classNames(
        className,
        styles.button,
        styles[theme],
        styles[size],
        {
          [styles['full-width']]: fullWidth,
          [styles.center]: center,
          [styles.filled]: !outlined,
          [styles.outlined]: outlined,
          [styles.icon]: icon,
        },
      )}
      type={type}
      {...otherProps}
    />
  );
}

const Button = forwardRef(_Button);

export default Button;
