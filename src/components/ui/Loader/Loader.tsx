import { Loader as LoaderIcon } from 'lucide-react';

import styles from './Loader.module.css';

function Loader() {
  return (
    <LoaderIcon className={styles.loader} role="status" aria-busy="true" />
  );
}

export default Loader;
