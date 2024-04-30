import RESIFileDiffChartPanelView from '@/components/service/resi-file-diff-chart/RESIFileDiffChartPanel/RESIFileDiffChartPanel';
import * as selectors from '@/store/selectors';
import useStore from '@/store/store';

function RESIFileDiffChartPanel() {
  const fileDiffs = useStore(selectors.fileDiffs);

  return <RESIFileDiffChartPanelView diffs={fileDiffs} />;
}

export default RESIFileDiffChartPanel;
