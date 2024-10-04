import { memo } from 'react';

import RESIFileSettings from '@/components/service/resi-file-list/RESIFileSettings/RESIFileSettings';

import styles from './RESIFileList.module.css';

interface RESIFileListItemTitleProps {
  name: string;
  color: string;
  strokeWidth: number;
  onChangeColor: (color: string) => void;
  onChangeActive: (active: boolean) => void;
  onChangeStrokeWidth: (width: number) => void;
}

const RESIFileListItemTitle = memo((props: RESIFileListItemTitleProps) => {
  const {
    name,
    color,
    strokeWidth,
    onChangeColor,
    onChangeActive,
    onChangeStrokeWidth,
  } = props;

  return (
    <RESIFileSettings
      color={color}
      strokeWidth={strokeWidth}
      onChangeColor={onChangeColor}
      onOpenChange={onChangeActive}
      onChangeStrokeWidth={onChangeStrokeWidth}
    >
      <button type="button" className={styles.title}>
        <div
          style={{
            color: color,
            backgroundColor: color,
          }}
          className={styles['color-indicator']}
        />

        <div className={styles['title-text']}>{name}</div>
      </button>
    </RESIFileSettings>
  );
});

RESIFileListItemTitle.displayName = 'RESIFileListItemTitle';

export default RESIFileListItemTitle;
