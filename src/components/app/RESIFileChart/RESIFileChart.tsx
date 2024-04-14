import RESIFileChartView from '@/components/service/RESIFileChart/RESIFileChart';
import useStore from '@/store/store';

function RESIFileChart() {
  const files = useStore((store) => store.files);
  const filteredFiles = files.filter((f) => f.checked);

  return <RESIFileChartView files={filteredFiles} />;
}

export default RESIFileChart;
