import useSmoothedFiles from '@/components/app/useSmoothedFiles';
import RESIFileChart from '@/components/service/resi-file-chart/RESIFileChart/RESIFileChart';
import RESIFileChartEmpty from '@/components/service/resi-file-chart/RESIFileChartEmpty/RESIFileChartEmpty';
import useStore from '@/store/store';

function RESIFileChartPanel() {
  const smoothedFiles = useSmoothedFiles('checked');
  const chunkSize = useStore((state) => state.settings.chunkSize);
  const offsetLeft = useStore((state) => state.settings.offsetLeft);
  const offsetRight = useStore((state) => state.settings.offsetRight);
  const setOffsetLeft = useStore((state) => state.setOffsetLeft);
  const setOffsetRight = useStore((state) => state.setOffsetRight);

  if (!smoothedFiles.length) {
    return <RESIFileChartEmpty />;
  }

  return (
    <RESIFileChart
      files={smoothedFiles}
      scale={chunkSize}
      offsetGap={1}
      offsetLeft={offsetLeft}
      onChangeOffsetLeft={setOffsetLeft}
      offsetRight={offsetRight}
      onChangeOffsetRight={setOffsetRight}
      interactive
    />
  );
}

export default RESIFileChartPanel;
