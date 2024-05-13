import RESIFileChartPanel from '@/components/app/RESIFileChartPanel/RESIFileChartPanel';
import RESIFileDiffChartPanel from '@/components/app/RESIFileDiffChartPanel/RESIFileDiffChartPanel';
import RESIFileGrowthChartPanel from '@/components/app/RESIFileGrowthChartPanel/RESIFileGrowthChartPanel';
import RESIFileListPanel from '@/components/app/RESIFileListPanel/RESIFileListPanel';
import ThemeButton from '@/components/app/ThemeButton/ThemeButton';
import AppLayout from '@/components/layout/AppLayout/AppLayout';

import './styles/index.css';

function App() {
  return (
    <AppLayout
      fileList={<RESIFileListPanel />}
      fileChart={
        <>
          <ThemeButton />
          <RESIFileChartPanel />
        </>
      }
      diffChart={<RESIFileDiffChartPanel />}
      growthChart={<RESIFileGrowthChartPanel />}
    />
  );
}

export default App;
