import { memo } from 'react';

import RESIFileSettings from '@/components/service/resi-file-list/RESIFileSettings/RESIFileSettings';

import styles from './RESIFileList.module.css';

interface RESIFileListItemTitleProps {
  color: string;
  name: string;
  strokeWidth: number;
  onChangeColor: (color: string) => void;
  onChangeStrokeWidth: (width: number) => void;
  onChangeActive: (active: boolean) => void;
}

const RESIFileListItemTitle = memo((props: RESIFileListItemTitleProps) => {
  const {
    color,
    name,
    strokeWidth,
    onChangeColor,
    onChangeStrokeWidth,
    onChangeActive,
  } = props;

  return (
    <RESIFileSettings
      color={color}
      onChangeColor={onChangeColor}
      strokeWidth={strokeWidth}
      onChangeStrokeWidth={onChangeStrokeWidth}
      onOpenChange={onChangeActive}
    >
      <button className={styles.title}>
        <div
          className={styles['color-indicator']}
          style={{
            color: color,
            backgroundColor: color,
          }}
        />

        <div className={styles['title-text']}>{name}</div>
      </button>
    </RESIFileSettings>
  );
});

RESIFileListItemTitle.displayName = 'RESIFileListItemTitle';

export default RESIFileListItemTitle;
