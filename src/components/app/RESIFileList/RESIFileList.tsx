import RESIFileListView from '@/components/ui/RESIFileList/RESIFileList';
import useStore from '@/store/store';

function RESIFileList() {
  const files = useStore((store) => store.files);
  const changeFileColor = useStore((store) => store.changeFileColor);
  const changeFileStrokeWidth = useStore(
    (store) => store.changeFileStrokeWidth,
  );
  const toggleFile = useStore((store) => store.toggleFile);
  const deleteFile = useStore((store) => store.deleteFile);

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
