import classNames from 'classnames';

import useAddFiles from '@/components/app/useAddFiles';
import RESIFilesInitView from '@/components/service/resi-file-list/RESIFilesInit/RESIFilesInit';
import useStore from '@/store/store';

import styles from './RESIFilesInit.module.css';

interface RESIFilesInitProps {
  className?: string;
}

function RESIFilesInit(props: RESIFilesInitProps) {
  const { className } = props;
  const files = useStore((state) => state.files);
  const { addFiles, isAddingFiles, isFetchingFiles, fetchExampleFiles } =
    useAddFiles();

  if (files.length) return null;

  return (
    <div className={classNames(styles['files-init'], className)}>
      <RESIFilesInitView
        isAddingFiles={isAddingFiles}
        isFetchingFiles={isFetchingFiles}
        onAddFiles={addFiles}
        onFetchExampleFiles={fetchExampleFiles}
      />
    </div>
  );
}

export default RESIFilesInit;
