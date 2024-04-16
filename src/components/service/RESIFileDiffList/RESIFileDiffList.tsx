import classNames from 'classnames';
import { File, LineChart, Ruler } from 'lucide-react';

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
            <File />
            <span>
              {diff.fileA.name} – {diff.fileB.name}
            </span>
          </div>

          <div className={styles.diff}>
            <LineChart />
            <span className={classNames({ [styles.red]: diff.diff < 0 })}>
              {diff.diff.toFixed(2)}
            </span>
            <span className={styles.gray}>/</span>
            <span className={classNames({ [styles.red]: diff.totalDiff < 0 })}>
              {diff.totalDiff.toFixed(2)}
            </span>
          </div>

          <div className={styles.distance}>
            <Ruler />
            <span>{Math.round(diff.distance / 10)} см</span>
            <span className={styles.gray}>/</span>
            <span>{Math.round(diff.totalDistance / 10)} см</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default RESIFileDiffList;
