import FileChart from '@/components/app/FileChart/FileChart';
import FileList from '@/components/app/FileList/FileList';
import LoadFilesButton from '@/components/app/LoadFilesButton/LoadFilesButton';
import AppLayout from '@/components/layout/AppLayout/AppLayout';
import Sidebar from '@/components/layout/Sidebar/Sidebar';

import './styles/index.css';

function App() {
  const sidebar = (
    <Sidebar header={<LoadFilesButton />}>
      <FileList />
    </Sidebar>
  );

  const body = <FileChart />;

  return <AppLayout sidebar={sidebar}>{body}</AppLayout>;
}

export default App;
