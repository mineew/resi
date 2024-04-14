import { lazy } from 'react';

import AppHeader from '@/components/layout/AppHeader/AppHeader';
import AppLayout from '@/components/layout/AppLayout/AppLayout';
import LeftSidebar from '@/components/layout/LeftSidebar/LeftSidebar';

import './styles/index.css';

const RESIFileButton = lazy(
  () => import('@/components/app/RESIFileButton/RESIFileButton'),
);

const RESIFileList = lazy(
  () => import('@/components/app/RESIFileList/RESIFileList'),
);

const RESIFileChartSettings = lazy(
  () => import('@/components/app/RESIFileChartSettings/RESIFileChartSettings'),
);

const RESIFileChart = lazy(
  () => import('@/components/app/RESIFileChart/RESIFileChart'),
);

function App() {
  const leftSidebar = (
    <LeftSidebar header={<RESIFileButton />} body={<RESIFileList />} />
  );

  const header = (
    <AppHeader>
      <RESIFileChartSettings />
    </AppHeader>
  );

  const body = <RESIFileChart />;

  return (
    <AppLayout left={leftSidebar} header={header} body={body} right={<div />} />
  );
}

export default App;
