import { HexColorPicker } from 'react-colorful';

import Popover from '@/components/ui/Popover/Popover';

interface ColorPickerProps {
  children: JSX.Element;
}

function ColorPicker(props: ColorPickerProps) {
  const { children } = props;

  return (
    <Popover trigger={children}>
      <HexColorPicker />
    </Popover>
  );
}

export default ColorPicker;
