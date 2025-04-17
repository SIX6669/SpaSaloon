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
      console.log('Formulario enviado:', formData);
      setFormData({ nombre: '', email: '', mensaje: '' });
      alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
    };
  
    return (
      <section className="contacto-section">
        <div className="contacto-container">
          <div className="contacto-content">
            <div className="contacto-info">
              <div className="contacto-header">
                <Etiqueta 
                  text="Contacto" 
                  fontSize="36px"
                  textColor="white"
                  className="contacto-title"
                />
              </div>
              
              <div className="contacto-details">
                <div className="contacto-detail-item">
                  <span className="contact-icon">📧</span>
                  <div className="contact-text-group">
                    <Etiqueta 
                      text="e-mail" 
                      fontSize="18px"
                      textColor="white"
                      className="contacto-label"
                    />
                    <Etiqueta 
                      text="info@sparesistencia.com" 
                      fontSize="22px"
                      textColor="#8BD8BD"
                      className="contacto-value"
                    />
                  </div>
                </div>
                
                <div className="contacto-detail-item">
                  <span className="contact-icon">📞</span>
                  <div className="contact-text-group">
                    <Etiqueta 
                      text="telefono" 
                      fontSize="18px"
                      textColor="white"
                      className="contacto-label"
                    />
                    <Etiqueta 
                      text="+54 362 422-5555" 
                      fontSize="22px"
                      textColor="#8BD8BD"
                      className="contacto-value"
                    />
                  </div>
                </div>
                
                <div className="contacto-detail-item">
                  <span className="contact-icon">📍</span>
                  <div className="contact-text-group">
                    <Etiqueta 
                      text="dirección" 
                      fontSize="18px"
                      textColor="white"
                      className="contacto-label"
                    />
                    <Etiqueta 
                      text="Calle French 400, Resistencia, Chaco" 
                      fontSize="22px"
                      textColor="#8BD8BD"
                      className="contacto-value"
                    />
                  </div>
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
                  text="Envíanos un mensaje" 
                  fontSize="26px"
                  textColor="white"
                  className="contacto-form-title"
                />
                <Etiqueta 
                  text="Nos contactaremos a tu mail en 24hs" 
                  fontSize="18px"
                  textColor="#8BD8BD"
                  className="contacto-form-subtitle"
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
                
                <div className="form-group message-group">
                  <Input
                    type="textarea"
                    name="mensaje"
                    placeholder="Mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required={true}
                    className="form-custom-input textarea"
                    rows="5"
                  />
                </div>
                
                <div className="form-submit">
                  <Boton
                    text="Enviar"
                    type="submit"
                    backgroundColor="#8BD8BD"
                    hoverBackgroundColor="#6AC5AA"
                    padding="12px 40px"
                    fontSize="18px"
                    borderRadius="30px"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contacto;