import useAddFiles from '@/components/app/useAddFiles';
import useFiles from '@/components/app/useFiles';
import useSmoothedFiles from '@/components/app/useSmoothedFiles';
import RESIFileChart from '@/components/service/resi-file-chart/RESIFileChart/RESIFileChart';
import RESIFileChartEmpty from '@/components/service/resi-file-chart/RESIFileChartEmpty/RESIFileChartEmpty';
import RESIFilesInit from '@/components/service/resi-file-list/RESIFilesInit/RESIFilesInit';
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

  const { addFiles, isAddingFiles, fetchExampleFiles, isFetchingFiles } =
    useAddFiles();

  if (!smoothedFiles.length) {
    return (
      <RESIFileChartEmpty>
        <div className={styles['files-init']}>
          <RESIFilesInit
            onAddFiles={addFiles}
            onFetchExampleFiles={fetchExampleFiles}
            isAddingFiles={isAddingFiles}
            isFetchingFiles={isFetchingFiles}
          />
        </div>
      </RESIFileChartEmpty>
    );
  }

  return (
    <RESIFileChart
      files={smoothedFiles}
      chunkSize={chunkSize}
      shouldRenderChunkSize={renderChunksOnChart}
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
