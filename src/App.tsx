import { lazy } from 'react';

import RESIFileListPanel from '@/components/app/RESIFileListPanel/RESIFileListPanel';
import AppLayout from '@/components/layout/AppLayout/AppLayout';

import './styles/index.css';

const RESIFileChartPanel = lazy(
  () => import('@/components/app/RESIFileChartPanel/RESIFileChartPanel'),
);

const RESIFileDiffChartPanel = lazy(
  () =>
    import('@/components/app/RESIFileDiffChartPanel/RESIFileDiffChartPanel'),
);

const RESIFileGrowthChartPanel = lazy(
  () =>
    import(
      '@/components/app/RESIFileGrowthChartPanel/RESIFileGrowthChartPanel'
    ),
);

function App() {
  return (
    <AppLayout
      fileList={<RESIFileListPanel />}
      fileChart={<RESIFileChartPanel />}
      diffChart={<RESIFileDiffChartPanel />}
      growthChart={<RESIFileGrowthChartPanel />}
    />
  );
}

export default App;
