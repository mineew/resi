import FileList from '@/components/app/FileList/FileList';
import LoadFilesButton from '@/components/app/LoadFilesButton/LoadFilesButton';
import AppLayout from '@/components/ui/AppLayout/AppLayout';
import Sidebar from '@/components/ui/Sidebar/Sidebar';

import './styles/globals.css';

function App() {
  const sidebar = (
    <Sidebar header={<LoadFilesButton />}>
      <FileList />
    </Sidebar>
  );

  return (
    <AppLayout sidebar={sidebar}>
      <div />
    </AppLayout>
  );
}

export default App;
