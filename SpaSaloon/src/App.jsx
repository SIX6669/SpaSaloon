import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
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