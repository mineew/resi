import RESIFileDiffChartDialog from '@/components/service/RESIFileDiffChartDialog/RESIFileDiffChartDialog';
import * as selectors from '@/store/selectors';
import useStore from '@/store/store';

function RESIFileDiffChart() {
  const fileDiffs = useStore(selectors.fileDiffs);

  return <RESIFileDiffChartDialog diffs={fileDiffs} />;
}

export default RESIFileDiffChart;
