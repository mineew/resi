import FileChart from '@/components/app/FileChart/FileChart';
import LoadFilesButton from '@/components/app/LoadFilesButton/LoadFilesButton';
import RESIFileList from '@/components/app/RESIFileList/RESIFileList';
import AppLayout from '@/components/layout/AppLayout/AppLayout';
import Sidebar from '@/components/layout/Sidebar/Sidebar';

import './styles/index.css';

function App() {
  const sidebar = (
    <Sidebar header={<LoadFilesButton />}>
      <RESIFileList />
    </Sidebar>
  );

  const body = <FileChart />;

  return <AppLayout sidebar={sidebar}>{body}</AppLayout>;
}

export default App;
