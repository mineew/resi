import AppSettings from '@/components/app/AppSettings/AppSettings';
import useAddFiles from '@/components/app/useAddFiles';
import RESIFileListPanelView from '@/components/service/resi-file-list/RESIFileListPanel/RESIFileListPanel';
import useStore from '@/store/store';

function RESIFileListPanel() {
  const files = useStore((state) => state.files);
  const deleteAllFiles = useStore((state) => state.deleteAllFiles);
  const checkAllFiles = useStore((state) => state.checkAllFiles);
  const uncheckAllFiles = useStore((state) => state.uncheckAllFiles);
  const changeFileColor = useStore((state) => state.changeFileColor);
  const changeFileStrokeWidth = useStore(
    (state) => state.changeFileStrokeWidth,
  );
  const toggleFile = useStore((state) => state.toggleFile);
  const deleteFile = useStore((state) => state.deleteFile);

  const { addFiles, isAddingFiles, fetchExampleFiles, isFetchingFiles } =
    useAddFiles();

  return (
    <RESIFileListPanelView
      files={files}
      onAddFiles={addFiles}
      onFetchExampleFiles={fetchExampleFiles}
      onDeleteAllFiles={deleteAllFiles}
      onSelectAllFiles={checkAllFiles}
      onUnselectAllFiles={uncheckAllFiles}
      onChangeFileColor={changeFileColor}
      onChangeFileStrokeWidth={changeFileStrokeWidth}
      onChangeFileChecked={toggleFile}
      onDeleteFile={deleteFile}
      appSettings={<AppSettings />}
      isAddingFiles={isAddingFiles}
      isFetchingFiles={isFetchingFiles}
    />
  );
}

export default RESIFileListPanel;
