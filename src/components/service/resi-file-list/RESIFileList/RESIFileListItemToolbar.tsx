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
  onChangeChecked: (checked: boolean) => void;
  onDelete: () => void;
}

const RESIFileListItemToolbar = memo((props: RESIFileListItemToolbarProps) => {
  const { checked: defaultChecked, onChangeChecked, onDelete } = props;
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
        label={t('RESI_FILE_LIST.ITEM_IS_ACTIVE')}
        checked={checked}
        onCheckedChange={setChecked}
        size="small"
      />

      <Button
        className={styles['delete-button']}
        theme="danger"
        size="small"
        outlined
        tabIndex={-1}
        onClick={handleClickDeleteButton}
      >
        <Trash2 />
        {t('RESI_FILE_LIST.DELETE_ITEM')}
      </Button>

      <AlertDialog
        open={alertDialogOpen}
        onOpenChange={setAlertDialogOpen}
        description={t('RESI_FILE_LIST.DELETE_ITEM_WARNING')}
        actionLabel={t('RESI_FILE_LIST.DELETE_ITEM_SURE')}
        onAction={onDelete}
        dontShowAgain={dontShowAgainAlertDialog}
        onChangeDontShowAgain={setDontShowAgainAlertDialog}
      />
    </div>
  );
});

RESIFileListItemToolbar.displayName = 'RESIFileListItemToolbar';

export default RESIFileListItemToolbar;
