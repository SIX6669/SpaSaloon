import React, { useState } from "react";
import "./AppAdmin.css";
import TurnosSection from "./TurnosSection.jsx";
import ServiciosSection from "./ServiciosSection.jsx";
import ProfesionalesSection from "./ProfesionalesSection.jsx"; 

const AppAdmin = () => {
  return (
    <div>
      <header className="admin-navbar">
        <ul>
          <li><a href="#turnos">Turnos</a></li>
          <li><a href="#servicios">Servicios</a></li>
          {<li><a href="#profesionales">Profesionales</a></li>}
        </ul>
      </header>

      <div className="admin-content">
        <TurnosSection />
        <hr style={{ margin: "2rem 0" }} />
        <ServiciosSection />
        <hr style={{ margin: "2rem 0" }} />
        <ProfesionalesSection />
        <hr style={{ margin: "2rem 0" }} />
      </div>
    </div>
  );
};

export default AppAdmin;
