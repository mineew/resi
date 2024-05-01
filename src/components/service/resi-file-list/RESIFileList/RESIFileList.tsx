import { memo } from 'react';

import { type RESIFile } from '@/store/types/RESIFile';

import styles from './RESIFileList.module.css';
import RESIFileListItem from './RESIFileListItem';

interface RESIFileListProps {
  files: RESIFile[];
  onChangeFileColor: (idx: number, color: string) => void;
  onChangeFileStrokeWidth: (idx: number, width: number) => void;
  onChangeFileChecked: (idx: number, checked: boolean) => void;
  onDeleteFile: (idx: number) => void;
}

const RESIFileList = memo((props: RESIFileListProps) => {
  const {
    files,
    onChangeFileColor,
    onChangeFileStrokeWidth,
    onChangeFileChecked,
    onDeleteFile,
  } = props;

  return (
    <ul className={styles.list}>
      {files.map((file, idx) => (
        <RESIFileListItem
          key={`${file.name}-${idx}`}
          file={file}
          idx={idx}
          onChangeColor={onChangeFileColor}
          onChangeStrokeWidth={onChangeFileStrokeWidth}
          onChangeChecked={onChangeFileChecked}
          onDelete={onDeleteFile}
        />
      ))}
    </ul>
  );
});

RESIFileList.displayName = 'RESIFileList';

export default RESIFileList;
