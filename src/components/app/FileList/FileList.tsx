import useStore from '@/store/store';

import styles from './FileList.module.css';
import FileListItem from './FileListItem';

function FileList() {
  const files = useStore((store) => store.files);
  const deleteFile = useStore((store) => store.deleteFile);
  const toggleFile = useStore((store) => store.toggleFile);

  return (
    <ul className={styles.list}>
      {files.map((file, i) => (
        <FileListItem
          key={`${file.name}-${i}`}
          name={file.name}
          color={file.color}
          checked={file.checked}
          onDelete={() => deleteFile(i)}
          onCheckedChange={(checked) => toggleFile(i, checked)}
        />
      ))}
    </ul>
  );
}

export default FileList;
