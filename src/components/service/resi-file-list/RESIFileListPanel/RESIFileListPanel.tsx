import { CopyCheck, CopyX, FilePlus2, Trash2 } from 'lucide-react';

import RESIFileList from '@/components/service/resi-file-list/RESIFileList/RESIFileList';
import RESIFileListEmpty from '@/components/service/resi-file-list/RESIFileListEmpty/RESIFileListEmpty';
import Button from '@/components/ui/Button/Button';
import Dropdown, { type DropdownItem } from '@/components/ui/Dropdown/Dropdown';
import ScrollArea from '@/components/ui/ScrollArea/ScrollArea';
import { type RESIFile } from '@/store/types/RESIFile';

import styles from './RESIFileListPanel.module.css';

interface RESIFileListPanelProps {
  files: RESIFile[];
  onAddFiles: () => void;
  onDeleteAllFiles: () => void;
  onSelectAllFiles: () => void;
  onUnselectAllFiles: () => void;
  onChangeFileColor: (idx: number, color: string) => void;
  onChangeFileStrokeWidth: (idx: number, width: number) => void;
  onChangeFileChecked: (idx: number, checked: boolean) => void;
  onDeleteFile: (idx: number) => void;
}

function RESIFileListPanel(props: RESIFileListPanelProps) {
  const {
    files,
    onAddFiles,
    onDeleteAllFiles,
    onSelectAllFiles,
    onUnselectAllFiles,
    onChangeFileColor,
    onChangeFileStrokeWidth,
    onChangeFileChecked,
    onDeleteFile,
  } = props;

  const allFilesChecked = !files.some((f) => !f.checked);
  const allFilesUnchecked = !files.some((f) => f.checked);
  const checkedFiles = files.filter((f) => f.checked);

  const dropdownItems: Array<DropdownItem | 'separator'> = [
    {
      id: 'clear',
      icon: <Trash2 />,
      label: 'Очистить',
      onClick: onDeleteAllFiles,
      danger: true,
    },
    'separator',
    {
      id: 'select-all',
      icon: <CopyCheck />,
      label: 'Выбрать все',
      onClick: onSelectAllFiles,
      disabled: allFilesChecked,
    },
    {
      id: 'unselect-all',
      icon: <CopyX />,
      label: 'Отключить все',
      onClick: onUnselectAllFiles,
      disabled: allFilesUnchecked,
    },
  ];

  if (!files.length) {
    return <RESIFileListEmpty onAddFiles={onAddFiles} />;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Button
          className={styles['add-files-button']}
          onClick={onAddFiles}
          center
        >
          <FilePlus2 />
          Добавить RESI файлы
        </Button>

        <Dropdown items={dropdownItems} />
      </div>

      <ScrollArea className={styles.body}>
        <div className={styles['list-wrapper']}>
          <RESIFileList
            files={files}
            onChangeFileColor={onChangeFileColor}
            onChangeFileStrokeWidth={onChangeFileStrokeWidth}
            onChangeFileChecked={onChangeFileChecked}
            onDeleteFile={onDeleteFile}
          />
        </div>
      </ScrollArea>

      <div className={styles.footer}>
        <div className={styles['footer-row']}>
          <div>Всего:</div>
          <div>{files.length}</div>
        </div>

        <div className={styles['footer-row']}>
          <div>Выбрано:</div>
          <div>{checkedFiles.length}</div>
        </div>
      </div>
    </div>
  );
}

export default RESIFileListPanel;
