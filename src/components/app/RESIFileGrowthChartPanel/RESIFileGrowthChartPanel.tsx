import useFileGrowth from '@/components/app/useFileGrowth';
import RESIFileGrowthChart from '@/components/service/resi-file-growth-chart/RESIFileGrowthChart/RESIFileGrowthChart';
import RESIFileGrowthChartEmpty from '@/components/service/resi-file-growth-chart/RESIFileGrowthChartEmpty/RESIFileGrowthChartEmpty';

function RESIFileGrowthChartPanel() {
  const growth = useFileGrowth();

  if (!growth.length) {
    return <RESIFileGrowthChartEmpty />;
  }

  return <RESIFileGrowthChart growth={growth} />;
}

export default RESIFileGrowthChartPanel;
