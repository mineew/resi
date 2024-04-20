import { Trash2 } from 'lucide-react';

import Button from '@/components/ui/Button/Button';
import Checkbox from '@/components/ui/Checkbox/Checkbox';
import { type RESIFile } from '@/store/types/RESIFile';

import styles from './RESIFileList.module.css';

interface RESIFileListItemToolbarProps {
  file: RESIFile;
  onChangeChecked: (checked: boolean) => void;
  onDelete: () => void;
}

function RESIFileListItemToolbar(props: RESIFileListItemToolbarProps) {
  const { file, onChangeChecked, onDelete } = props;

  return (
    <div className={styles.toolbar}>
      <Checkbox
        label="Отображать"
        checked={file.checked}
        onCheckedChange={onChangeChecked}
        size="small"
      />

      <Button
        className={styles['delete-button']}
        theme="danger"
        size="small"
        outlined
        onClick={onDelete}
        tabIndex={-1}
      >
        <Trash2 />
        Удалить
      </Button>
    </div>
  );
}

export default RESIFileListItemToolbar;
