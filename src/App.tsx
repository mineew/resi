import { lazy } from 'react';

import RESIFileChartSettings from '@/components/app/RESIFileChartSettings/RESIFileChartSettings';
import RESIFileDiffList from '@/components/app/RESIFileDiffList/RESIFileDiffList';
import RESIFileListPanel from '@/components/app/RESIFileListPanel/RESIFileListPanel';
import AppHeader from '@/components/layout/AppHeader/AppHeader';
import AppLayout from '@/components/layout/AppLayout/AppLayout';
import RightSidebar from '@/components/layout/RightSidebar/RightSidebar';

import './styles/index.css';

const RESIFileChart = lazy(
  () => import('@/components/app/RESIFileChart/RESIFileChart'),
);

const RESIFileDiffChart = lazy(
  () => import('@/components/app/RESIFileDiffChart/RESIFileDiffChart'),
);

function App() {
  const header = (
    <AppHeader>
      <RESIFileChartSettings />
    </AppHeader>
  );

  const body = <RESIFileChart />;

  const rightSidebar = (
    <RightSidebar footer={<RESIFileDiffChart />}>
      <RESIFileDiffList />
    </RightSidebar>
  );

  return (
    <AppLayout
      left={<RESIFileListPanel />}
      header={header}
      body={body}
      right={rightSidebar}
    />
  );
}

export default App;
