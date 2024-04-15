import classNames from 'classnames';

import { type RESIFileDiff } from '@/store/types/RESIFileDiff';

import styles from './RESIFileDiffList.module.css';

interface RESIFileDiffListProps {
  diffs: RESIFileDiff[];
}

function RESIFileDiffList(props: RESIFileDiffListProps) {
  const { diffs } = props;

  return (
    <ul className={styles.list}>
      {diffs.map((diff, idx) => (
        <li
          className={styles.item}
          key={`${diff.fileA.name}-${diff.fileB.name}-${idx}`}
        >
          <div className={styles.title}>
            {diff.fileA.name} – {diff.fileB.name}
          </div>

          <div
            className={classNames({
              [styles.red]: diff.diff < 0,
            })}
          >
            {diff.diff.toFixed(2)}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default RESIFileDiffList;
