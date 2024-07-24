import parseFiles from './parseFiles';

type GetFilesFunction = () => Promise<Record<string, string> | null>;

const processFiles = async (getFiles: GetFilesFunction) => {
  const files = await getFiles();
  const resiFiles = parseFiles(files || {});

  return resiFiles;
};

export default processFiles;
