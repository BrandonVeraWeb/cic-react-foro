import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <h1>Estado en React</h1>
      <p>
        Contador: <b>{count}</b>
      </p>
      <button onClick={() => setCount(count + 1)}>Aumentar</button>
      <button onClick={() => setCount(count - 1)}>Disminuir</button>
    </div>
  );
}

export default App;
