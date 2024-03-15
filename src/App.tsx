import { Button, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

import openFiles from './utils/openFiles';

function App() {
  const handleClick = async () => {
    const result = await openFiles();
    console.log(result);
  };

  return (
    <MantineProvider>
      <Button onClick={handleClick}>Open File Dialog</Button>
    </MantineProvider>
  );
}

export default App;
