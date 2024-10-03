import type { Meta, StoryFn } from '@storybook/react';
import { ChartLine } from 'lucide-react';
import { useRef } from 'react';

import ExportChartButton from './ExportChartButton';

export const Default: StoryFn<typeof ExportChartButton> = ({ filename }) => {
  const chartWrapper = useRef<HTMLDivElement>(null);

  return (
    <div style={{ padding: 20 }}>
      <ExportChartButton
        filename={filename}
        chartWrapper={chartWrapper.current}
      />

      <div ref={chartWrapper} style={{ marginTop: 20 }}>
        <ChartLine style={{ width: 100, height: 100 }} />
      </div>
    </div>
  );
};

export default {
  component: ExportChartButton,
  args: {
    filename: 'image.png',
  },
  title: 'Components/Charts/ExportChartButton',
  argTypes: {
    className: { table: { disable: true } },
    chartWrapper: { table: { disable: true } },
  },
} as Meta<typeof ExportChartButton>;
