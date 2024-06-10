import * as Radix from '@radix-ui/react-alert-dialog';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import Button from '@/components/ui/Button/Button';

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

  return (
    <Radix.Root open={open} onOpenChange={onOpenChange}>
      {trigger && <Radix.Trigger asChild>{trigger}</Radix.Trigger>}

      <Radix.Portal>
        <Radix.Overlay className="overlay" />

        <Radix.Content
          className={classNames('dialog', 'shadow', styles.content)}
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
            <Radix.Cancel asChild>
              <Button outlined>{cancelLabel || t('UI.ALERT.CANCEL')}</Button>
            </Radix.Cancel>

            <Radix.Action asChild>
              <Button theme="danger" onClick={onAction}>
                {actionLabel || t('UI.ALERT.ACTION')}
              </Button>
            </Radix.Action>
          </div>
        </Radix.Content>
      </Radix.Portal>
    </Radix.Root>
  );
}

export default AlertDialog;
