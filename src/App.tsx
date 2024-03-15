import LoadFilesButton from '@/components/app/LoadFilesButton/LoadFilesButton';
import AppLayout from '@/components/ui/AppLayout/AppLayout';
import Sidebar from '@/components/ui/Sidebar/Sidebar';

import './styles/globals.css';

function App() {
  return (
    <AppLayout
      sidebar={
        <Sidebar header={<LoadFilesButton />}>
          <div />
        </Sidebar>
      }
    >
      <div />
    </AppLayout>
  );
}

export default App;
