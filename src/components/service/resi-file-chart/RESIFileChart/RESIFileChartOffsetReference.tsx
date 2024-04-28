import { ReferenceArea, ReferenceLine } from 'recharts';

interface RESIFileChartOffsetReferenceProps {
  offset: number;
  side: 'left' | 'right';
  chartDomain: readonly [number, number, number, number];
}

function RESIFileChartOffsetReference(
  props: RESIFileChartOffsetReferenceProps,
) {
  const { offset, side, chartDomain } = props;
  const [minX, minY, maxX, maxY] = chartDomain;
  const referenceOverflow = 100;

  return (
    <>
      <ReferenceArea
        x1={0}
        x2={6}
        y1={0}
        y2={800}
        ifOverflow="hidden"
        fill="var(--red-5)"
        isFront
      />

      <ReferenceLine x={6} stroke="var(--red-9)" />
    </>
  );

  // return (
  //   <>
  //     <ReferenceArea
  //       x1={side === 'left' ? minX : offset}
  //       x2={side === 'left' ? offset : maxX + referenceOverflow}
  //       y1={minY}
  //       y2={maxY + referenceOverflow}
  //       ifOverflow="hidden"
  //       fill="var(--red-5)"
  //       isFront
  //     />

  //     <ReferenceLine x={offset} stroke="var(--red-9)" />
  //   </>
  // );
}

export default RESIFileChartOffsetReference;
