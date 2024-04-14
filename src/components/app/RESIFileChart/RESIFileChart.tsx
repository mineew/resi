import RESIFileChartView from '@/components/service/RESIFileChart/RESIFileChart';
import * as selectors from '@/store/selectors';
import useStore from '@/store/store';

function RESIFileChart() {
  const checkedFiles = useStore(selectors.checkedFiles);
  const smoothDataOptions = useStore(selectors.smoothDataOptions);

  return (
    <RESIFileChartView
      files={checkedFiles}
      smoothDataOptions={smoothDataOptions}
    />
  );
}

export default RESIFileChart;
