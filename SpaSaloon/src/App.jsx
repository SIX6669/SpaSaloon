import { useState } from 'react';
import './App.css';
import Button from './componentes/buttons';


function App() {
  return (
    <div>
      <Button onClick={() => alert('Reservaste tu cita 😌')}>
        Turno
      </Button>
    </div>
  );
}
export default App;