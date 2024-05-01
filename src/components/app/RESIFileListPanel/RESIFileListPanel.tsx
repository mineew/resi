import { useCallback } from 'react';

import AppSettings from '@/components/app/AppSettings/AppSettings';
import RESIFileListPanelView from '@/components/service/resi-file-list/RESIFileListPanel/RESIFileListPanel';
import useStore from '@/store/store';
import processFiles from '@/utils/resi-files/processFiles';

function RESIFileListPanel() {
  const files = useStore((state) => state.files);
  const addFiles = useStore((state) => state.addFiles);
  const deleteAllFiles = useStore((state) => state.deleteAllFiles);
  const checkAllFiles = useStore((state) => state.checkAllFiles);
  const uncheckAllFiles = useStore((state) => state.uncheckAllFiles);
  const changeFileColor = useStore((state) => state.changeFileColor);
  const changeFileStrokeWidth = useStore(
    (state) => state.changeFileStrokeWidth,
  );
  const toggleFile = useStore((state) => state.toggleFile);
  const deleteFile = useStore((state) => state.deleteFile);

  const handleAddFiles = useCallback(() => {
    processFiles()
      .then(addFiles)
      .catch(() => {
        // do nothing
      });
  }, [addFiles]);

  return (
    <RESIFileListPanelView
      files={files}
      onAddFiles={handleAddFiles}
      onDeleteAllFiles={deleteAllFiles}
      onSelectAllFiles={checkAllFiles}
      onUnselectAllFiles={uncheckAllFiles}
      onChangeFileColor={changeFileColor}
      onChangeFileStrokeWidth={changeFileStrokeWidth}
      onChangeFileChecked={toggleFile}
      onDeleteFile={deleteFile}
      //
      appSettings={<AppSettings />}
    />
  );
}

export default RESIFileListPanel;
