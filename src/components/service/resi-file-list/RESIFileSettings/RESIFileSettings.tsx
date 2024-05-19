import { memo } from 'react';
import { HexColorPicker } from 'react-colorful';
import { useTranslation } from 'react-i18next';
import { useDebouncedCallback } from 'use-debounce';

import Popover from '@/components/ui/Popover/Popover';
import Slider from '@/components/ui/Slider/Slider';
import useDebouncedState from '@/utils/hooks/useDebouncedState';

import styles from './RESIFileSettings.module.css';

interface RESIFileSettingsProps {
  color: string;
  onChangeColor: (color: string) => void;
  strokeWidth: number;
  onChangeStrokeWidth: (width: number) => void;
  children: JSX.Element;
  onOpenChange?: (open: boolean) => void;
}

const RESIFileSettings = memo((props: RESIFileSettingsProps) => {
  const {
    color,
    onChangeColor,
    strokeWidth: defaultStrokeWidth,
    onChangeStrokeWidth,
    children,
    onOpenChange,
  } = props;

  const { t } = useTranslation();

  const handleChangeColor = useDebouncedCallback(onChangeColor, 300);

  const [strokeWidth, setStrokeWidth] = useDebouncedState(
    defaultStrokeWidth,
    onChangeStrokeWidth,
  );

  return (
    <Popover trigger={children} onOpenChange={onOpenChange}>
      <div className={styles.wrapper}>
        <HexColorPicker color={color} onChange={handleChangeColor} />

        <Slider
          label={t('RESI_FILE_LIST.ITEM_STROKE_WIDTH')}
          value={strokeWidth}
          onValueChange={setStrokeWidth}
          size="small"
          min={1}
        />
      </div>
    </Popover>
  );
});

RESIFileSettings.displayName = 'RESIFileSettings';

export default RESIFileSettings;
