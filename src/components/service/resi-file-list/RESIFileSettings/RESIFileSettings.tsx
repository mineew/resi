import { HexColorPicker } from 'react-colorful';
import { useDebouncedCallback } from 'use-debounce';

import Popover from '@/components/ui/Popover/Popover';
import Slider from '@/components/ui/Slider/Slider';

import styles from './RESIFileSettings.module.css';

interface RESIFileSettingsProps {
  color: string;
  onChangeColor: (color: string) => void;
  colorDebounceWait?: number;
  strokeWidth: number;
  onChangeStrokeWidth: (width: number) => void;
  children: JSX.Element;
  onOpenChange?: (open: boolean) => void;
}

function RESIFileSettings(props: RESIFileSettingsProps) {
  const {
    color,
    onChangeColor,
    colorDebounceWait = 300,
    strokeWidth,
    onChangeStrokeWidth,
    children,
    onOpenChange,
  } = props;

  const handleChangeColor = useDebouncedCallback(
    onChangeColor,
    colorDebounceWait,
  );

  return (
    <Popover trigger={children} onOpenChange={onOpenChange}>
      <div className={styles.wrapper}>
        <HexColorPicker color={color} onChange={handleChangeColor} />

        <Slider
          label="Толщина линии"
          value={strokeWidth}
          onValueChange={onChangeStrokeWidth}
          size="small"
          min={1}
        />
      </div>
    </Popover>
  );
}

export default RESIFileSettings;
