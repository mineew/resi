import useStore from '@/store/store';

import styles from './FileList.module.css';
import FileListItem from './FileListItem';

function FileList() {
  const files = useStore((store) => store.files);
  const deleteFile = useStore((store) => store.deleteFile);
  const toggleFile = useStore((store) => store.toggleFile);
  const changeFileColor = useStore((store) => store.changeFileColor);

  return (
    <ul className={styles.list}>
      {files.map((file, i) => (
        <FileListItem
          key={`${file.name}-${i}`}
          name={file.name}
          color={file.color}
          checked={file.checked}
          onCheckedChange={(checked) => toggleFile(i, checked)}
          onColorChange={(color) => changeFileColor(i, color)}
          onDelete={() => deleteFile(i)}
        />
      ))}
    </ul>
  );
}

export default FileList;
