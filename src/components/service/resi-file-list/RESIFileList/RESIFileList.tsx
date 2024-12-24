import { memo } from 'react';

import type { RESIFile } from '@/store/types/RESIFile';

import RESIFileListItem from './RESIFileListItem';

import styles from './RESIFileList.module.css';

interface RESIFileListProps {
  files: RESIFile[];
  onDeleteFile: (idx: number) => void;
  onChangeFileColor: (idx: number, color: string) => void;
  onChangeFileChecked: (idx: number, checked: boolean) => void;
  onChangeFileStrokeWidth: (idx: number, width: number) => void;
}

const RESIFileList = memo((props: RESIFileListProps) => {
  const {
    files,
    onDeleteFile,
    onChangeFileColor,
    onChangeFileChecked,
    onChangeFileStrokeWidth,
  } = props;

  return (
    <ul className={styles.list}>
      {files.map((file, idx) => (
        <RESIFileListItem
          idx={idx}
          file={file}
          onDelete={onDeleteFile}
          // eslint-disable-next-line react/no-array-index-key
          key={`${file.name}-${idx}`}
          onChangeColor={onChangeFileColor}
          onChangeChecked={onChangeFileChecked}
          onChangeStrokeWidth={onChangeFileStrokeWidth}
        />
      ))}
    </ul>
  );
});

RESIFileList.displayName = 'RESIFileList';

export default RESIFileList;
