import { Loader as LoaderIcon } from 'lucide-react';

import styles from './Loader.module.css';

function Loader() {
  return (
    <LoaderIcon role="status" aria-busy="true" className={styles.loader} />
  );
}

export default Loader;
