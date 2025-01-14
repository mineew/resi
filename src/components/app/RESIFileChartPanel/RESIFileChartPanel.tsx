import RESIFilesInit from '@/components/app/RESIFilesInit/RESIFilesInit';
import useFiles from '@/components/app/useFiles';
import useSmoothedFiles from '@/components/app/useSmoothedFiles';
import RESIFileChart from '@/components/service/resi-file-chart/RESIFileChart/RESIFileChart';
import RESIFileChartEmpty from '@/components/service/resi-file-chart/RESIFileChartEmpty/RESIFileChartEmpty';
import useStore from '@/store/store';

import styles from './RESIFileChartPanel.module.css';

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
    return (
      <RESIFileChartEmpty>
        <RESIFilesInit className={styles['files-init']} />
      </RESIFileChartEmpty>
    );
  }

  return (
    <RESIFileChart
      interactive
      files={smoothedFiles}
      chunkSize={chunkSize}
      offsetGap={offsetGap}
      offsetLeft={offsetLeft}
      offsetRight={offsetRight}
      onChangeOffsetLeft={setOffsetLeft}
      onChangeOffsetRight={setOffsetRight}
      shouldRenderChunkSize={renderChunksOnChart}
    />
  );
}

export default RESIFileChartPanel;
