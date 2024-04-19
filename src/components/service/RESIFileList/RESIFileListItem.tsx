import classNames from 'classnames';
import { Trash2 } from 'lucide-react';
import { useState } from 'react';

import RESIFileSettings from '@/components/service/RESIFileSettings/RESIFileSettings';
import Button from '@/components/ui/Button/Button';
import Checkbox from '@/components/ui/Checkbox/Checkbox';
import { type RESIFile } from '@/store/types/RESIFile';

import styles from './RESIFileList.module.css';

interface RESIFileListItemProps {
  file: RESIFile;
  onChangeColor: (color: string) => void;
  onChangeStrokeWidth: (width: number) => void;
  onChangeChecked: (checked: boolean) => void;
  onDelete: () => void;
}

function RESIFileListItem(props: RESIFileListItemProps) {
  const {
    file,
    onChangeColor,
    onChangeStrokeWidth,
    onChangeChecked,
    onDelete,
  } = props;

  const [active, setActive] = useState(false);

  return (
    <li
      className={classNames(styles.item, {
        [styles.active]: active,
      })}
    >
      <RESIFileSettings
        color={file.color}
        onChangeColor={onChangeColor}
        strokeWidth={file.strokeWidth}
        onChangeStrokeWidth={onChangeStrokeWidth}
        onOpenChange={setActive}
      >
        <div>
          <div className={styles.title}>
            <div
              className={styles['color-indicator']}
              style={{ backgroundColor: file.color }}
            />

            <div className={styles['title-text']}>{file.name}</div>
          </div>
        </div>
      </RESIFileSettings>

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
        >
          <Trash2 />
          Удалить
        </Button>
      </div>
    </li>
  );
}

export default RESIFileListItem;
