import classNames from 'classnames';
import { memo, useCallback, useState } from 'react';

import { type RESIFile } from '@/store/types/RESIFile';

import styles from './RESIFileList.module.css';
import RESIFileListItemTitle from './RESIFileListItemTitle';
import RESIFileListItemToolbar from './RESIFileListItemToolbar';

interface RESIFileListItemProps {
  file: RESIFile;
  idx: number;
  onChangeColor: (idx: number, color: string) => void;
  onChangeStrokeWidth: (idx: number, width: number) => void;
  onChangeChecked: (idx: number, checked: boolean) => void;
  onDelete: (idx: number) => void;
}

const RESIFileListItem = memo((props: RESIFileListItemProps) => {
  const {
    file,
    idx,
    onChangeColor,
    onChangeStrokeWidth,
    onChangeChecked,
    onDelete,
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
        color={file.color}
        name={file.name}
        strokeWidth={file.strokeWidth}
        onChangeColor={handleChangeColor}
        onChangeStrokeWidth={handleChangeStrokeWidth}
        onChangeActive={setActive}
      />

      <RESIFileListItemToolbar
        checked={file.checked}
        onChangeChecked={handleChangeChecked}
        onDelete={handleDelete}
      />
    </li>
  );
});

RESIFileListItem.displayName = 'RESIFileListItem';

export default RESIFileListItem;
