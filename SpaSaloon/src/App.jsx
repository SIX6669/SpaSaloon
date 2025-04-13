import { useState } from 'react';
import './App.css';
import Button from './componentes/buttons.jsx';
import Carousel from './componentes/carousel.jsx';
import Header from './componentes/Header/header.jsx';
import Input from './componentes/Formularios/input.jsx';
import Etiqueta from './componentes/Formularios/etiquetas.jsx';
import Boton from './componentes/Formularios/boton.jsx';
import Formulario from './componentes/Formularios/formulario.jsx';
import Hero from './componentes/Body/hero.jsx';
import Servicios from './componentes/Body/servicios.jsx';




function App() {
  return (
    <>
      <Header />
      <div className="main-content">
        <section className="section hero-section">
          <Hero />
        </section>
        <section className="section section-masajes">
          {/* Masajes content */}
        </section>
        <section className="section section-servicios">
          <Servicios></Servicios>
        </section>
        <section className="section section-contacto">
          {/* Contacto content */}
        </section>
        {/* Add more sections as needed */}
      </div>
    </>
  );
}
export default App;