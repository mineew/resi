import { lazy } from 'react';

import RESIFileButton from '@/components/app/RESIFileButton/RESIFileButton';
import RESIFileChartSettings from '@/components/app/RESIFileChartSettings/RESIFileChartSettings';
import RESIFileDiffList from '@/components/app/RESIFileDiffList/RESIFileDiffList';
import RESIFileList from '@/components/app/RESIFileList/RESIFileList';
import AppHeader from '@/components/layout/AppHeader/AppHeader';
import AppLayout from '@/components/layout/AppLayout/AppLayout';
import LeftSidebar from '@/components/layout/LeftSidebar/LeftSidebar';
import RightSidebar from '@/components/layout/RightSidebar/RightSidebar';

import './styles/index.css';

const RESIFileChart = lazy(
  () => import('@/components/app/RESIFileChart/RESIFileChart'),
);

function App() {
  const leftSidebar = (
    <LeftSidebar header={<RESIFileButton />}>
      <RESIFileList />
    </LeftSidebar>
  );

  const header = (
    <AppHeader>
      <RESIFileChartSettings />
    </AppHeader>
  );

  const body = <RESIFileChart />;

  const rightSidebar = (
    <RightSidebar footer="Footer">
      <RESIFileDiffList />
    </RightSidebar>
  );

  return (
    <AppLayout
      left={leftSidebar}
      header={header}
      body={body}
      right={rightSidebar}
    />
  );
}

export default App;
