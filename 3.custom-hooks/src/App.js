import { useState } from 'react';
import './App.css';

function useCounter(initialValue = 0, step = 1) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + step);
  };

  const decrement = () => {
    setCount(count - step);
  };

  const reset = () => {
    setCount(initialValue);
  };

  const duplicate = () => {
    setCount(count * 2);
  };

  return {
    count,
    increment,
    decrement,
    reset,
    duplicate,
  };
}

function App() {
  const { count, increment, decrement, reset, duplicate } = useCounter(20, 5);

  return (
    <div className='App'>
      <h1>Estado en React</h1>
      <p>
        Contador: <b>{count}</b>
      </p>
      <button onClick={increment}>Aumentar</button>
      <button onClick={reset}>Restablecer</button>
      <button onClick={duplicate}>Duplicar</button>
      <button onClick={decrement}>Disminuir</button>
    </div>
  );
}

export default App;
