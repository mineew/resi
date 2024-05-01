import { Trash2 } from 'lucide-react';
import { memo } from 'react';

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

  const [checked, setChecked] = useDebouncedState(
    defaultChecked,
    onChangeChecked,
  );

  return (
    <div className={styles.toolbar}>
      <Checkbox
        label="Отображать"
        checked={checked}
        onCheckedChange={setChecked}
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
});

RESIFileListItemToolbar.displayName = 'RESIFileListItemToolbar';

export default RESIFileListItemToolbar;
