import RESIFileChartPanelView from '@/components/service/resi-file-chart/RESIFileChartPanel/RESIFileChartPanel';
import * as selectors from '@/store/selectors';
import useStore from '@/store/store';

function RESIFileChartPanel() {
  const smoothedFiles = useStore(selectors.smoothedFiles);
  const chartScale = useStore(selectors.smoothChunkSize);
  const settings = useStore(selectors.settings);
  const setSettings = useStore(selectors.setSettings);

  return (
    <RESIFileChartPanelView
      files={smoothedFiles}
      chartScale={chartScale}
      settings={settings}
      onChangeSettings={setSettings}
    />
  );
}

export default RESIFileChartPanel;
