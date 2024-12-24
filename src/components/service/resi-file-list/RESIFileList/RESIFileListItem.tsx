import classNames from 'classnames';
import { memo, useCallback, useState } from 'react';

import type { RESIFile } from '@/store/types/RESIFile';

import RESIFileListItemTitle from './RESIFileListItemTitle';
import RESIFileListItemToolbar from './RESIFileListItemToolbar';

import styles from './RESIFileList.module.css';

interface RESIFileListItemProps {
  idx: number;
  file: RESIFile;
  onDelete: (idx: number) => void;
  onChangeColor: (idx: number, color: string) => void;
  onChangeChecked: (idx: number, checked: boolean) => void;
  onChangeStrokeWidth: (idx: number, width: number) => void;
}

const RESIFileListItem = memo((props: RESIFileListItemProps) => {
  const {
    idx,
    file,
    onDelete,
    onChangeColor,
    onChangeChecked,
    onChangeStrokeWidth,
  } = props;

  const [active, setActive] = useState(false);

  const handleChangeColor = useCallback(
    (color: string) => {
      onChangeColor(idx, color);
    },
    [idx, onChangeColor],
  );

  const handleChangeStrokeWidth = useCallback(
    (width: number) => {
      onChangeStrokeWidth(idx, width);
    },
    [idx, onChangeStrokeWidth],
  );

  const handleChangeChecked = useCallback(
    (checked: boolean) => {
      onChangeChecked(idx, checked);
    },
    [idx, onChangeChecked],
  );

  const handleDelete = useCallback(() => {
    onDelete(idx);
  }, [idx, onDelete]);

  return (
    <li
      className={classNames(styles.item, {
        [styles.active]: active,
      })}
    >
      <RESIFileListItemTitle
        name={file.name}
        color={file.color}
        onChangeActive={setActive}
        strokeWidth={file.strokeWidth}
        onChangeColor={handleChangeColor}
        onChangeStrokeWidth={handleChangeStrokeWidth}
      />

      <RESIFileListItemToolbar
        checked={file.checked}
        onDelete={handleDelete}
        onChangeChecked={handleChangeChecked}
      />
    </li>
  );
});

RESIFileListItem.displayName = 'RESIFileListItem';

export default RESIFileListItem;
