import RESIFileDiffChart from '@/components/service/resi-file-diff-chart/RESIFileDiffChart/RESIFileDiffChart';
import RESIFileDiffChartEmpty from '@/components/service/resi-file-diff-chart/RESIFileDiffChartEmpty/RESIFileDiffChartEmpty';
import { type RESIFileDiff } from '@/store/types/RESIFileDiff';

interface RESIFileDiffChartPanelProps {
  diffs: RESIFileDiff[];
}

function RESIFileDiffChartPanel(props: RESIFileDiffChartPanelProps) {
  const { diffs } = props;

  if (diffs.length < 2) {
    return <RESIFileDiffChartEmpty />;
  }

  return <RESIFileDiffChart diffs={diffs} />;
}

export default RESIFileDiffChartPanel;
