import useFileDifferences from '@/components/app/useFileDifferences';
import RESIFileDiffChart from '@/components/service/resi-file-diff-chart/RESIFileDiffChart/RESIFileDiffChart';
import RESIFileDiffChartEmpty from '@/components/service/resi-file-diff-chart/RESIFileDiffChartEmpty/RESIFileDiffChartEmpty';

function RESIFileDiffChartPanel() {
  const fileDiffs = useFileDifferences();

  if (fileDiffs.length < 2) {
    return <RESIFileDiffChartEmpty />;
  }

  return <RESIFileDiffChart diffs={fileDiffs} />;
}

export default RESIFileDiffChartPanel;
