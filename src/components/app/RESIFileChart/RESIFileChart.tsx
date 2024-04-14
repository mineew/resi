import RESIFileChartView from '@/components/service/RESIFileChart/RESIFileChart';
import * as selectors from '@/store/selectors';
import useStore from '@/store/store';

function RESIFileChart() {
  const smoothedFiles = useStore(selectors.smoothedFiles);
  const scale = useStore(selectors.smoothChunkSize);

  return <RESIFileChartView files={smoothedFiles} scale={scale} />;
}

export default RESIFileChart;
