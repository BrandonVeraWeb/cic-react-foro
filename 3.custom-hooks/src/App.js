import { useState } from 'react';
import useMathSum from './useMathSum';
import './App.css';

function App() {
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(0);
  const { esPar, sum } = useMathSum(valueA, valueB);

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const a = formData.get('a');
    const b = formData.get('b');

    setValueA(Number(a));
    setValueB(Number(b));
  }

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <input type='number' name='a' id='a' placeholder='A' />
        <input type='number' name='b' id='b' placeholder='B' />
        <button type='submit'>Sumar</button>
      </form>
      <div>
        <p>La suma es: {sum}</p>
        <p>Es par: {esPar ? 'Si' : 'No'}</p>
      </div>
    </div>
  );
}

export default App;
