import { useMemo } from 'react';

import useStore from '@/store/store';

function useFiles(type?: 'all' | 'checked') {
  const files = useStore((state) => state.files);

  const checkedFiles = useMemo(() => {
    return files.filter((f) => f.checked);
  }, [files]);

  return type === 'checked' ? checkedFiles : files;
}

export default useFiles;
