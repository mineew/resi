import Button from '@/components/ui/Button/Button';
import Dialog from '@/components/ui/Dialog/Dialog';
import { type RESIFileDiff } from '@/store/types/RESIFileDiff';

import RESIFileDiffChart from './RESIFileDiffChart';
import styles from './RESIFileDiffChartDialog.module.css';

interface RESIFileDiffChartDialogProps {
  diffs: RESIFileDiff[];
}

function RESIFileDiffChartDialog(props: RESIFileDiffChartDialogProps) {
  const { diffs } = props;

  return (
    <Dialog
      title="Зависимость погрешности RESI от длины сверления"
      trigger={
        <Button fullWidth center disabled={!diffs.length}>
          Показать график зависимости
        </Button>
      }
      size="800"
    >
      <div className={styles.canvas}>
        <RESIFileDiffChart diffs={diffs} />
      </div>
    </Dialog>
  );
}

export default RESIFileDiffChartDialog;
