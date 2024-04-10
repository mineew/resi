import { type RESIFile } from '@/store/RESIFile';

import styles from './RESIFileList.module.css';
import RESIFileListItem from './RESIFileListItem';

interface RESIFileListProps {
  files: RESIFile[];
  onChangeFileColor: (idx: number, color: string) => void;
  onChangeFileStrokeWidth: (idx: number, width: number) => void;
  onChangeFileChecked: (idx: number, checked: boolean) => void;
  onDeleteFile: (idx: number) => void;
}

function RESIFileList(props: RESIFileListProps) {
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
          onChangeColor={onChangeFileColor.bind(null, idx)}
          onChangeStrokeWidth={onChangeFileStrokeWidth.bind(null, idx)}
          onChangeChecked={onChangeFileChecked.bind(null, idx)}
          onDelete={onDeleteFile.bind(null, idx)}
        />
      ))}
    </ul>
  );
}

export default RESIFileList;
