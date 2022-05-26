import { participantes } from './participantes';
import './App.css';

function Participante({ nombre, apellido, title }) {
  return (
    <div className='Participante'>
      <h3>
        {nombre} {apellido}
      </h3>
      <p>{title}</p>
    </div>
  );
}

function App() {
  return (
    <div className='App'>
      <h1>Participantes del Foro:</h1>
      <main>
        {participantes.map(participante => (
          <Participante key={participante.id} {...participante} />
        ))}
      </main>
    </div>
  );
}

export default App;
