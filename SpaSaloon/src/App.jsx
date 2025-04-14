import React from 'react';

import './App.css';
/* componentes para agregar/importar
import Button from './componentes/buttons.jsx';
import Carousel from './componentes/carousel.jsx';
import Input from './componentes/Formularios/input.jsx';
import Etiqueta from './componentes/Formularios/etiquetas.jsx';
import Boton from './componentes/Formularios/boton.jsx';
import Formulario from './componentes/Formularios/formulario.jsx';
*/
import Hero from './componentes/Body/hero.jsx';
import Servicios from './componentes/Body/servicios.jsx';
import SobreNosotros from './componentes/Body/sobre-nosotros.jsx';
import Contacto from './componentes/Body/contacto.jsx';
import Header from './componentes/Header/header.jsx';




function App() {
  return (
    <>
      <Header />
      <div className="main-content">
        <section className="section hero-section" id="hero">
          <Hero />
        </section>
        <section className="section section-masajes" id="sobre-nosotros">
          <SobreNosotros></SobreNosotros>
        </section>
        <section className="section section-servicios" id="servicios">
          <Servicios></Servicios>
        </section>
        <section className="section section-contacto" id="contacto">
          <Contacto></Contacto>
        </section>
        {/* Add more sections as needed */}
      </div>
    </>
  );
}
export default App;