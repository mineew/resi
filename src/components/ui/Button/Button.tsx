/* eslint-disable react/button-has-type */

import classNames from 'classnames';
import { forwardRef, type ButtonHTMLAttributes, type Ref } from 'react';

import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: boolean;
  center?: boolean;
  outlined?: boolean;
  fullWidth?: boolean;
  size?: 'small' | 'default';
  theme?: 'danger' | 'primary';
}

function _Button(props: ButtonProps, ref: Ref<HTMLButtonElement>) {
  const {
    className,
    icon = false,
    center = false,
    type = 'button',
    size = 'default',
    outlined = false,
    theme = 'primary',
    fullWidth = false,
    ...otherProps
  } = props;

  return (
    <button
      className={classNames(
        className,
        styles.button,
        styles[theme],
        styles[size],
        {
          [styles.icon]: icon,
          [styles.center]: center,
          [styles.filled]: !outlined,
          [styles.outlined]: outlined,
          [styles['full-width']]: fullWidth,
        },
      )}
      ref={ref}
      type={type}
      {...otherProps}
    />
  );
}

const Button = forwardRef(_Button);

export default Button;
