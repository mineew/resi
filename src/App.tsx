import { lazy } from 'react';

import RESIFileDiffList from '@/components/app/RESIFileDiffList/RESIFileDiffList';
import RESIFileListPanel from '@/components/app/RESIFileListPanel/RESIFileListPanel';
import AppLayout from '@/components/layout/AppLayout/AppLayout';
import RightSidebar from '@/components/layout/RightSidebar/RightSidebar';

import './styles/index.css';

const RESIFileChartPanel = lazy(
  () => import('@/components/app/RESIFileChartPanel/RESIFileChartPanel'),
);

const RESIFileDiffChart = lazy(
  () => import('@/components/app/RESIFileDiffChart/RESIFileDiffChart'),
);

function App() {
  const rightSidebar = (
    <RightSidebar footer={<RESIFileDiffChart />}>
      <RESIFileDiffList />
    </RightSidebar>
  );

  return (
    <AppLayout
      left={<RESIFileListPanel />}
      body={<RESIFileChartPanel />}
      right={rightSidebar}
    />
  );
}

export default App;
