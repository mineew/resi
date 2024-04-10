import { lazy } from 'react';

import AppLayout from '@/components/layout/AppLayout/AppLayout';
import Sidebar from '@/components/layout/Sidebar/Sidebar';

import './styles/index.css';

const RESIFileButton = lazy(
  () => import('@/components/app/RESIFileButton/RESIFileButton'),
);

const RESIFileList = lazy(
  () => import('@/components/app/RESIFileList/RESIFileList'),
);

const RESIFileChart = lazy(
  () => import('@/components/app/RESIFileChart/RESIFileChart'),
);

function App() {
  return (
    <AppLayout
      sidebar={
        <Sidebar header={<RESIFileButton />}>
          <RESIFileList />
        </Sidebar>
      }
    >
      <RESIFileChart />
    </AppLayout>
  );
}

export default App;
