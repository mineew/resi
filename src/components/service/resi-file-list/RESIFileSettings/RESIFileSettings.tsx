import { memo, useCallback, type JSX } from 'react';
import { HexColorPicker } from 'react-colorful';
import { useTranslation } from 'react-i18next';
import { useDebouncedCallback } from 'use-debounce';

import Popover from '@/components/ui/Popover/Popover';
import Slider from '@/components/ui/Slider/Slider';
import useDebouncedState from '@/utils/hooks/useDebouncedState';

import styles from './RESIFileSettings.module.css';

interface RESIFileSettingsProps {
  color: string;
  strokeWidth: number;
  children: JSX.Element;
  onChangeColor: (color: string) => void;
  onChangeStrokeWidth: (width: number) => void;
  onOpenChange?: (open: boolean) => void;
}

const RESIFileSettings = memo((props: RESIFileSettingsProps) => {
  const {
    color,
    children,
    onOpenChange,
    onChangeColor,
    onChangeStrokeWidth,
    strokeWidth: defaultStrokeWidth,
  } = props;

  const { t } = useTranslation();

  const handleChangeColor = useDebouncedCallback(onChangeColor, 300);

  const [strokeWidth, setStrokeWidth] = useDebouncedState(
    defaultStrokeWidth,
    onChangeStrokeWidth,
  );

  const strokeWidthFormatter = useCallback(
    (value: number) => {
      return t('UTILS.NUMBER', { value });
    },
    [t],
  );

  return (
    <Popover trigger={children} onOpenChange={onOpenChange}>
      <div className={styles.wrapper} data-testid="resi-file-settings">
        <HexColorPicker color={color} onChange={handleChangeColor} />

        <Slider
          min={1}
          size="small"
          value={strokeWidth}
          onValueChange={setStrokeWidth}
          valueFormatter={strokeWidthFormatter}
          label={t('RESI_FILE_LIST.ITEM_STROKE_WIDTH')}
        />
      </div>
    </Popover>
  );
});

RESIFileSettings.displayName = 'RESIFileSettings';

export default RESIFileSettings;
