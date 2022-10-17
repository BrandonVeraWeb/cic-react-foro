import { useState } from 'react';
import './App.css';

const INITIAL_COUNT_VALUE = 0

function App() {
  const [count, setCount] = useState(INITIAL_COUNT_VALUE);

  return (
    <div className='App'>
      <h1>Estado en React</h1>
      <p>
        Contador: <b>{count}</b>
      </p>
      <button onClick={() => setCount(count + 1)}>Aumentar</button>
      <button onClick={() => setCount(INITIAL_COUNT_VALUE)}>Restablecer</button>
      <button onClick={() => setCount(count - 1)}>Disminuir</button>
    </div>
  );
}

export default App;
