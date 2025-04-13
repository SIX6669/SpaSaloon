import React, { useState } from 'react';
import Etiqueta from '../Formularios/etiquetas.jsx';
import Boton from '../Formularios/boton.jsx';
import Input from '../Formularios/input.jsx';
import '../../styles/contacto.css';

const Contacto = () => {
    const [formData, setFormData] = useState({
      nombre: '',
      email: '',
      mensaje: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
      console.log('Formulario enviado:', formData);
      // Reset form after submission
      setFormData({ nombre: '', email: '', mensaje: '' });
      alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
    };
  
    return (
      <section className="contacto-section">
        <div className="contacto-container">
          <div className="contacto-info">
            <Etiqueta 
              text="Contacto" 
              fontSize="32px"
              textColor="white"
              padding="0 0 15px 0"
              className="contacto-title"
            />
            
            <div className="contacto-details">
              <div className="contacto-detail-item">
                <Etiqueta 
                  text="e-mail" 
                  fontSize="28px"
                  textColor="white"
                  className="contacto-label"
                />
                <Etiqueta 
                  text="info@sparesistencia.com" 
                  fontSize="28px"
                  textColor="#8BD8BD"
                  className="contacto-value"
                />
              </div>
              
              <div className="contacto-detail-item">
                <Etiqueta 
                  text="telefono" 
                  fontSize="28px"
                  textColor="white"
                  className="contacto-label"
                />
                <Etiqueta 
                  text="+54 362 422-5555" 
                  fontSize="28px"
                  textColor="#8BD8BD"
                  className="contacto-value"
                />
              </div>
              
              <div className="contacto-detail-item">
                <Etiqueta 
                  text="Calle French 400, Resistencia, Chaco" 
                  fontSize="28px"
                  textColor="#8BD8BD"
                  className="contacto-value"
                />
              </div>
            </div>
            
            <div className="contacto-map-container">
              <iframe
                title="Ubicación del Spa"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-58.99749755859376%2C-27.46270794944356%2C-58.98720788002015%2C-27.45566772429961&amp;layer=mapnik&amp;marker=-27.459187861915857%2C-58.992352719306946"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="contacto-map"
              ></iframe>
            </div>
          </div>
          
          <div className="contacto-form-container">
            <div className="contacto-form-header">
              <Etiqueta 
                text="Envíanos un mensaje, nos contactaremos a tu mail en 24hs" 
                fontSize="20px"
                textColor="white"
                className="contacto-form-title"
              />
            </div>
            
            <form className="contacto-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <Input
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required={true}
                  className="form-custom-input"
                />
              </div>
              
              <div className="form-group">
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required={true}
                  className="form-custom-input"
                />
              </div>
              
              <div className="form-group">
                <Input
                  type="textarea"
                  name="mensaje"
                  placeholder="Mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required={true}
                  className="form-custom-input textarea"
                  rows="4"
                />
              </div>
              
              <div className="form-submit">
                <Boton
                  text="Enviar"
                  type="submit"
                  backgroundColor="#8BD8BD"
                  hoverBackgroundColor="#6AC5AA"
                  padding="8px 32px"
                  fontSize="16px"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contacto;