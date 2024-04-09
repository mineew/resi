import { HexColorPicker } from 'react-colorful';
import { useDebouncedCallback } from 'use-debounce';

import Popover from '@/components/ui/Popover/Popover';

interface ColorPickerProps {
  value: string;
  onChange: (value: string) => void;
  children: JSX.Element;
  debounceWait?: number;
}

function ColorPicker(props: ColorPickerProps) {
  const { value, onChange, children, debounceWait = 300 } = props;
  const handleChange = useDebouncedCallback(onChange, debounceWait);

  return (
    <Popover trigger={children}>
      <HexColorPicker color={value} onChange={handleChange} />
    </Popover>
  );
}

export default ColorPicker;
