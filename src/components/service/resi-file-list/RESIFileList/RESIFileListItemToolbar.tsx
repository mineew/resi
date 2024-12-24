import { Trash2 } from 'lucide-react';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useLocalStorage from 'use-local-storage';

import AlertDialog from '@/components/ui/AlertDialog/AlertDialog';
import Button from '@/components/ui/Button/Button';
import Checkbox from '@/components/ui/Checkbox/Checkbox';
import useDebouncedState from '@/utils/hooks/useDebouncedState';

import styles from './RESIFileList.module.css';

interface RESIFileListItemToolbarProps {
  checked: boolean;
  onDelete: () => void;
  onChangeChecked: (checked: boolean) => void;
}

const RESIFileListItemToolbar = memo((props: RESIFileListItemToolbarProps) => {
  const { onDelete, onChangeChecked, checked: defaultChecked } = props;
  const { t } = useTranslation();
  const [alertDialogOpen, setAlertDialogOpen] = useState(false);
  const [dontShowAgainAlertDialog, setDontShowAgainAlertDialog] =
    useLocalStorage('show-delete-resi-file-warning', false);

  const [checked, setChecked] = useDebouncedState(
    defaultChecked,
    onChangeChecked,
  );

  const handleClickDeleteButton = useCallback(() => {
    if (!dontShowAgainAlertDialog) {
      setAlertDialogOpen(true);
    } else {
      onDelete();
    }
  }, [dontShowAgainAlertDialog, onDelete]);

  return (
    <div className={styles.toolbar}>
      <Checkbox
        size="small"
        checked={checked}
        onCheckedChange={setChecked}
        label={t('RESI_FILE_LIST.ITEM_IS_ACTIVE')}
      />

      <Button
        outlined
        size="small"
        tabIndex={-1}
        theme="danger"
        onClick={handleClickDeleteButton}
        className={styles['delete-button']}
      >
        <Trash2 />
        {t('RESI_FILE_LIST.DELETE_ITEM')}
      </Button>

      <AlertDialog
        onAction={onDelete}
        open={alertDialogOpen}
        onOpenChange={setAlertDialogOpen}
        dontShowAgain={dontShowAgainAlertDialog}
        actionLabel={t('RESI_FILE_LIST.DELETE_ITEM_SURE')}
        onChangeDontShowAgain={setDontShowAgainAlertDialog}
        description={t('RESI_FILE_LIST.DELETE_ITEM_WARNING')}
      />
    </div>
  );
});

RESIFileListItemToolbar.displayName = 'RESIFileListItemToolbar';

export default RESIFileListItemToolbar;
