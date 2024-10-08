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

  const { addFiles, isFetchingFiles, fetchExampleFiles } = useAddFiles();

  return (
    <RESIFileListPanelView
      files={files}
      appSettings={<AppSettings />}
      isFetchingFiles={isFetchingFiles}
      onAddFiles={addFiles}
      onDeleteFile={deleteFile}
      onSelectAllFiles={checkAllFiles}
      onChangeFileChecked={toggleFile}
      onDeleteAllFiles={deleteAllFiles}
      onChangeFileColor={changeFileColor}
      onUnselectAllFiles={uncheckAllFiles}
      onFetchExampleFiles={fetchExampleFiles}
      onChangeFileStrokeWidth={changeFileStrokeWidth}
    />
  );
}

export default RESIFileListPanel;
