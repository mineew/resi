import * as Radix from '@radix-ui/react-alert-dialog';
import classNames from 'classnames';
import { useCallback, useState } from 'react';
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
  onAction?: (dontShowAgain: boolean) => void;
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
  } = props;

  const { t } = useTranslation();
  const [dontShowAgainChecked, setDontShowAgainChecked] = useState(false);

  const handleAction = useCallback(() => {
    onAction?.(dontShowAgainChecked);
  }, [onAction, dontShowAgainChecked]);

  const handleCloseAutofocus = useCallback((e: Event) => {
    e.preventDefault();
  }, []);

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

          {description && (
            <Radix.Description className={styles.description}>
              {description}
            </Radix.Description>
          )}

          <div className={styles.buttons}>
            <Radix.Action asChild>
              <Button theme="danger" onClick={handleAction}>
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
              checked={dontShowAgainChecked}
              onCheckedChange={setDontShowAgainChecked}
            />
          </div>
        </Radix.Content>
      </Radix.Portal>
    </Radix.Root>
  );
}

export default AlertDialog;
