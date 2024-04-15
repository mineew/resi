import RESIFileDiffListView from '@/components/service/RESIFileDiffList/RESIFileDiffList';
import * as selectors from '@/store/selectors';
import useStore from '@/store/store';

function RESIFileDiffList() {
  const fileDiffs = useStore(selectors.fileDiffs);

  return <RESIFileDiffListView diffs={fileDiffs} />;
}

export default RESIFileDiffList;
