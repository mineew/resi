import { FolderOpen, Inbox } from 'lucide-react';

import Button from '@/components/ui/Button/Button';

import styles from './RESIFileListEmpty.module.css';

interface RESIFileListEmptyProps {
  onAddFiles: () => void;
}

function RESIFileListEmpty(props: RESIFileListEmptyProps) {
  const { onAddFiles } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.body}>
        <Inbox className={styles.icon} strokeWidth={1} />

        <Button onClick={onAddFiles}>
          <FolderOpen />
          Открыть RESI файлы
        </Button>

        <div className={styles.description}>
          Файлы прибора резистографа, расширение *.xls
        </div>
      </div>
    </div>
  );
}

export default RESIFileListEmpty;
