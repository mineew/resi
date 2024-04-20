import classNames from 'classnames';
import { useState } from 'react';

import { type RESIFile } from '@/store/types/RESIFile';

import styles from './RESIFileList.module.css';
import RESIFileListItemTitle from './RESIFileListItemTitle';
import RESIFileListItemToolbar from './RESIFileListItemToolbar';

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
      <RESIFileListItemTitle
        file={file}
        onChangeColor={onChangeColor}
        onChangeStrokeWidth={onChangeStrokeWidth}
        onChangeActive={setActive}
      />

      <RESIFileListItemToolbar
        file={file}
        onChangeChecked={onChangeChecked}
        onDelete={onDelete}
      />
    </li>
  );
}

export default RESIFileListItem;
