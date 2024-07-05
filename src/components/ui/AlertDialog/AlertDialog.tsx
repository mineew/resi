import * as Radix from '@radix-ui/react-alert-dialog';
import classNames from 'classnames';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import Button from '@/components/ui/Button/Button';
import Checkbox from '@/components/ui/Checkbox/Checkbox';

import styles from './AlertDialog.module.css';

interface AlertDialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: JSX.Element;
  title?: string;
  description?: string;
  cancelLabel?: string;
  actionLabel?: string;
  onAction?: () => void;
  dontShowAgain?: boolean;
  onChangeDontShowAgain?: (dontShowAgain: boolean) => void;
}

function AlertDialog(props: AlertDialogProps) {
  const {
    open,
    onOpenChange,
    trigger,
    title,
    description,
    cancelLabel,
    actionLabel,
    onAction,
    dontShowAgain = false,
    onChangeDontShowAgain,
  } = props;

  const { t } = useTranslation();

  const handleCloseAutofocus = useCallback((e: Event) => {
    e.preventDefault();
  }, []);

  const handleChangeDontShowAgain = useCallback(
    (dontShowAgain: boolean) => {
      onChangeDontShowAgain?.(dontShowAgain);
    },
    [onChangeDontShowAgain],
  );

  return (
    <Radix.Root open={open} onOpenChange={onOpenChange}>
      {trigger && <Radix.Trigger asChild>{trigger}</Radix.Trigger>}

      <Radix.Portal>
        <Radix.Overlay className="overlay" />

        <Radix.Content
          className={classNames('dialog', 'shadow', styles.content)}
          onCloseAutoFocus={handleCloseAutofocus}
        >
          <Radix.Title className={styles.title}>
            {title || t('UI.ALERT.TITLE')}
          </Radix.Title>

          <Radix.Description className={styles.description}>
            {description || t('UI.ALERT.DESCRIPTION')}
          </Radix.Description>

          <div className={styles.buttons}>
            <Radix.Action asChild>
              <Button theme="danger" onClick={onAction}>
                {actionLabel || t('UI.ALERT.ACTION')}
              </Button>
            </Radix.Action>

            <Radix.Cancel asChild>
              <Button outlined>{cancelLabel || t('UI.ALERT.CANCEL')}</Button>
            </Radix.Cancel>
          </div>

          <div className={styles.checkbox}>
            <Checkbox
              label={t('UI.ALERT.DONT_SHOW_AGAIN')}
              checked={dontShowAgain}
              onCheckedChange={handleChangeDontShowAgain}
            />
          </div>
        </Radix.Content>
      </Radix.Portal>
    </Radix.Root>
  );
}

export default AlertDialog;
