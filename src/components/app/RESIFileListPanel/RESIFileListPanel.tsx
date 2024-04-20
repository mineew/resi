import { useCallback } from 'react';

import RESIFileListPanelView from '@/components/service/resi-file-list/RESIFileListPanel/RESIFileListPanel';
import * as selectors from '@/store/selectors';
import useStore from '@/store/store';
import processFiles from '@/utils/resi-files/processFiles';

function RESIFileListPanel() {
  const files = useStore(selectors.files);
  const addFiles = useStore(selectors.addFiles);
  const deleteAllFiles = useStore(selectors.deleteAllFiles);
  const checkAllFiles = useStore(selectors.checkAllFiles);
  const uncheckAllFiles = useStore(selectors.uncheckAllFiles);
  const changeFileColor = useStore(selectors.changeFileColor);
  const changeFileStrokeWidth = useStore(selectors.changeFileStrokeWidth);
  const toggleFile = useStore(selectors.toggleFile);
  const deleteFile = useStore(selectors.deleteFile);

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
    />
  );
}

export default RESIFileListPanel;
