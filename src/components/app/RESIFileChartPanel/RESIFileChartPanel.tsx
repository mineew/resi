import useFiles from '@/components/app/useFiles';
import useSmoothedFiles from '@/components/app/useSmoothedFiles';
import RESIFileChart from '@/components/service/resi-file-chart/RESIFileChart/RESIFileChart';
import RESIFileChartEmpty from '@/components/service/resi-file-chart/RESIFileChartEmpty/RESIFileChartEmpty';
import useStore from '@/store/store';

function RESIFileChartPanel() {
  const files = useFiles('checked');
  const smoothedFiles = useSmoothedFiles(files);
  const chunkSize = useStore((state) => state.settings.chunkSize);
  const renderChunksOnChart = useStore(
    (state) => state.settings.renderChunksOnChart,
  );
  const offsetLeft = useStore((state) => state.settings.offsetLeft);
  const offsetRight = useStore((state) => state.settings.offsetRight);
  const setOffsetLeft = useStore((state) => state.setOffsetLeft);
  const setOffsetRight = useStore((state) => state.setOffsetRight);
  const offsetGap = useStore((state) => state.settings.offsetGap);

  if (!smoothedFiles.length) {
    return <RESIFileChartEmpty />;
  }

  return (
    <RESIFileChart
      files={smoothedFiles}
      scale={chunkSize}
      shouldRenderScale={renderChunksOnChart}
      offsetGap={offsetGap}
      offsetLeft={offsetLeft}
      onChangeOffsetLeft={setOffsetLeft}
      offsetRight={offsetRight}
      onChangeOffsetRight={setOffsetRight}
      interactive
    />
  );
}

export default RESIFileChartPanel;
