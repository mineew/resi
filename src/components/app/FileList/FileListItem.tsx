import { Trash2 } from 'lucide-react';
import { useId } from 'react';

import Button from '@/components/ui/Button/Button';
import ColorPicker from '@/components/ui/ColorPicker/ColorPicker';

import styles from './FileList.module.css';

interface FileListItemProps {
  name: string;
  color: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  onDelete: () => void;
}

function FileListItem(props: FileListItemProps) {
  const { name, color, checked, onCheckedChange, onDelete } = props;
  const id = useId();

  return (
    <li className={styles.item}>
      <ColorPicker>
        <div className={styles.title}>
          <div
            className={styles['color-box']}
            style={{ backgroundColor: color }}
          />

          {name}
        </div>
      </ColorPicker>

      <div className={styles.toolbar}>
        <div className={styles.checkbox}>
          <input
            id={`${id}-checkbox`}
            type="checkbox"
            checked={checked}
            onChange={(e) => {
              onCheckedChange(e.target.checked);
            }}
          />

          <label htmlFor={`${id}-checkbox`}>Отображать на графике</label>
        </div>

        <Button theme="danger" size="small" onClick={onDelete}>
          <Trash2 />
          Удалить
        </Button>
      </div>
    </li>
  );
}

export default FileListItem;
