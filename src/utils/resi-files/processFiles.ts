import openFiles from './openFiles';
import parseFiles from './parseFiles';

const processFiles = async () => {
  const files = await openFiles();
  const resiFiles = parseFiles(files || {});

  return resiFiles;
};

export default processFiles;
