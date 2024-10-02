const BASE_URL = import.meta.env.BASE_URL;

async function fetchExampleFiles() {
  try {
    const result: Record<string, string> = {};

    for (let i = 0; i < 10; i += 1) {
      const fileN = i + 1 <= 9 ? `0${i + 1}` : (i + 1).toString();
      const fileName = `File-0${fileN}`;
      const filePath = `${BASE_URL}/example-data/${fileName}.xls`;

      const file = await fetch(filePath);
      const fileContents = await file.text();

      result[fileName] = fileContents;
    }

    return result;
  } catch {
    return null;
  }
}

export default fetchExampleFiles;
