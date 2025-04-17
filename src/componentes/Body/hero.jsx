import React from 'react'; 
import '../../styles/hero.css';
import img from '../../assets/fondoHero.jpg';
function Hero() {
  return (
    <section 
      className="hero-section" 
      id="inicio"
      style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}	
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Renueva tu cuerpo, calma tu mente</h1>
          <p className="hero-subtitle">Descubre el equilibrio perfecto entre bienestar y serenidad.</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;