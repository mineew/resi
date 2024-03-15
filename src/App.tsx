import openFiles from './utils/openFiles';
import './styles/globals.css';

function App() {
  const handleClick = async () => {
    const result = await openFiles();
    console.log(result);
  };

  return (
    <div style={{ padding: 20 }}>
      <button onClick={handleClick}>Open File Dialog</button>
    </div>
  );
}

export default App;
