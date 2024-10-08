import AppToolbar from '@/components/app/AppToolbar/AppToolbar';
import RESIFileChartPanel from '@/components/app/RESIFileChartPanel/RESIFileChartPanel';
import RESIFileDiffChartPanel from '@/components/app/RESIFileDiffChartPanel/RESIFileDiffChartPanel';
import RESIFileGrowthChartPanel from '@/components/app/RESIFileGrowthChartPanel/RESIFileGrowthChartPanel';
import RESIFileListPanel from '@/components/app/RESIFileListPanel/RESIFileListPanel';
import RESIFilesInit from '@/components/app/RESIFilesInit/RESIFilesInit';
import AppLayout from '@/components/layout/AppLayout/AppLayout';

import './styles/index.css';

function App() {
  return (
    <AppLayout
      appToolbar={<AppToolbar />}
      filesInit={<RESIFilesInit />}
      fileList={<RESIFileListPanel />}
      fileChart={<RESIFileChartPanel />}
      diffChart={<RESIFileDiffChartPanel />}
      growthChart={<RESIFileGrowthChartPanel />}
    />
  );
}

export default App;
