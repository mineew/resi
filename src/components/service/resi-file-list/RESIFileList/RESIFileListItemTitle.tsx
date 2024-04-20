import RESIFileSettings from '@/components/service/resi-file-list/RESIFileSettings/RESIFileSettings';
import { type RESIFile } from '@/store/types/RESIFile';

import styles from './RESIFileList.module.css';

interface RESIFileListItemTitleProps {
  file: RESIFile;
  onChangeColor: (color: string) => void;
  onChangeStrokeWidth: (width: number) => void;
  onChangeActive: (active: boolean) => void;
}

function RESIFileListItemTitle(props: RESIFileListItemTitleProps) {
  const { file, onChangeColor, onChangeStrokeWidth, onChangeActive } = props;

  return (
    <RESIFileSettings
      color={file.color}
      onChangeColor={onChangeColor}
      strokeWidth={file.strokeWidth}
      onChangeStrokeWidth={onChangeStrokeWidth}
      onOpenChange={onChangeActive}
    >
      <button className={styles.title}>
        <div
          className={styles['color-indicator']}
          style={{
            color: file.color,
            backgroundColor: file.color,
          }}
        />

        <div className={styles['title-text']}>{file.name}</div>
      </button>
    </RESIFileSettings>
  );
}

export default RESIFileListItemTitle;
