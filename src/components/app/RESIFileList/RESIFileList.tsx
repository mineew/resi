import RESIFileListView from '@/components/service/RESIFileList/RESIFileList';
import * as selectors from '@/store/selectors';
import useStore from '@/store/store';

function RESIFileList() {
  const files = useStore(selectors.files);
  const changeFileColor = useStore(selectors.changeFileColor);
  const changeFileStrokeWidth = useStore(selectors.changeFileStrokeWidth);
  const toggleFile = useStore(selectors.toggleFile);
  const deleteFile = useStore(selectors.deleteFile);

  return (
    <RESIFileListView
      files={files}
      onChangeFileColor={changeFileColor}
      onChangeFileStrokeWidth={changeFileStrokeWidth}
      onChangeFileChecked={toggleFile}
      onDeleteFile={deleteFile}
    />
  );
}

export default RESIFileList;
