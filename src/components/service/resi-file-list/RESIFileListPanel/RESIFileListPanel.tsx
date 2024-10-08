import { CopyCheck, CopyX, FilePlus2, Trash2 } from 'lucide-react';
import { memo, useCallback, useState, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import useLocalStorage from 'use-local-storage';

import RESIFileList from '@/components/service/resi-file-list/RESIFileList/RESIFileList';
import RESIFileListEmpty from '@/components/service/resi-file-list/RESIFileListEmpty/RESIFileListEmpty';
import AlertDialog from '@/components/ui/AlertDialog/AlertDialog';
import Button from '@/components/ui/Button/Button';
import Dropdown, { type DropdownItem } from '@/components/ui/Dropdown/Dropdown';
import ScrollArea from '@/components/ui/ScrollArea/ScrollArea';
import type { RESIFile } from '@/store/types/RESIFile';

import styles from './RESIFileListPanel.module.css';

interface RESIFileListPanelProps {
  files: RESIFile[];
  onAddFiles: () => void;
  onDeleteAllFiles: () => void;
  onSelectAllFiles: () => void;
  onUnselectAllFiles: () => void;
  onFetchExampleFiles: () => void;
  onDeleteFile: (idx: number) => void;
  onChangeFileColor: (idx: number, color: string) => void;
  onChangeFileChecked: (idx: number, checked: boolean) => void;
  onChangeFileStrokeWidth: (idx: number, width: number) => void;
  appSettings?: ReactNode;
  isFetchingFiles?: boolean;
}

const RESIFileListPanel = memo((props: RESIFileListPanelProps) => {
  const {
    files,
    appSettings,
    isFetchingFiles,
    onAddFiles,
    onDeleteFile,
    onDeleteAllFiles,
    onSelectAllFiles,
    onChangeFileColor,
    onUnselectAllFiles,
    onFetchExampleFiles,
    onChangeFileChecked,
    onChangeFileStrokeWidth,
  } = props;

  const { t } = useTranslation();

  const allFilesChecked = !files.some((f) => !f.checked);
  const allFilesUnchecked = !files.some((f) => f.checked);
  const checkedFiles = files.filter((f) => f.checked);

  const [alertDialogOpen, setAlertDialogOpen] = useState(false);
  const [dontShowAgainAlertDialog, setDontShowAgainAlertDialog] =
    useLocalStorage('show-delete-all-resi-files-warning', false);

  const handleClearFiles = useCallback(() => {
    if (!dontShowAgainAlertDialog) {
      setAlertDialogOpen(true);
    } else {
      onDeleteAllFiles();
    }
  }, [dontShowAgainAlertDialog, onDeleteAllFiles]);

  const dropdownItems: (DropdownItem | 'separator')[] = [
    {
      id: 'clear',
      danger: true,
      icon: <Trash2 />,
      label: t('RESI_FILE_LIST.CLEAR_FILES'),
      onClick: handleClearFiles,
    },
    'separator',
    {
      id: 'select-all',
      icon: <CopyCheck />,
      disabled: allFilesChecked,
      label: t('RESI_FILE_LIST.ENABLE_ALL_FILES'),
      onClick: onSelectAllFiles,
    },
    {
      icon: <CopyX />,
      id: 'unselect-all',
      disabled: allFilesUnchecked,
      label: t('RESI_FILE_LIST.DISABLE_ALL_FILES'),
      onClick: onUnselectAllFiles,
    },
  ];

  if (!files.length) {
    return (
      <RESIFileListEmpty
        isFetchingFiles={isFetchingFiles}
        onAddFiles={onAddFiles}
        onFetchExampleFiles={onFetchExampleFiles}
      />
    );
  }

  return (
    <div className={styles.wrapper} data-testid="resi-file-list-panel">
      <div className={styles.header}>
        <Button
          disabled={isFetchingFiles}
          className={styles['add-files-button']}
          onClick={onAddFiles}
          center
        >
          <FilePlus2 />
          {t('RESI_FILE_LIST.ADD_FILES')}
        </Button>

        <Dropdown
          items={dropdownItems}
          tooltip={t('RESI_FILE_LIST.MORE_FILE_OPERATIONS')}
        />

        <AlertDialog
          open={alertDialogOpen}
          dontShowAgain={dontShowAgainAlertDialog}
          actionLabel={t('RESI_FILE_LIST.CLEAR_FILES_SURE')}
          description={t('RESI_FILE_LIST.CLEAR_FILES_WARNING')}
          onAction={onDeleteAllFiles}
          onOpenChange={setAlertDialogOpen}
          onChangeDontShowAgain={setDontShowAgainAlertDialog}
        />

        {appSettings}
      </div>

      <ScrollArea className={styles.body}>
        <div className={styles['list-wrapper']}>
          <RESIFileList
            files={files}
            onDeleteFile={onDeleteFile}
            onChangeFileColor={onChangeFileColor}
            onChangeFileChecked={onChangeFileChecked}
            onChangeFileStrokeWidth={onChangeFileStrokeWidth}
          />
        </div>
      </ScrollArea>

      <div className={styles.footer}>
        <div className={styles['footer-row']}>
          <div>{t('RESI_FILE_LIST.TOTAL_FILES')}:</div>
          <div>{t('UTILS.NUMBER', { value: files.length })}</div>
        </div>

        <div className={styles['footer-row']}>
          <div>{t('RESI_FILE_LIST.ACTIVE_FILES')}:</div>
          <div>{t('UTILS.NUMBER', { value: checkedFiles.length })}</div>
        </div>
      </div>
    </div>
  );
});

RESIFileListPanel.displayName = 'RESIFileListPanel';

export default RESIFileListPanel;
