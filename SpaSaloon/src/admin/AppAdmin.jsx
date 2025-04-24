import React, { useState } from "react";
import "./AppAdmin.css";
import TurnosSection from "./TurnosSection.jsx";

const AppAdmin = () => {
  const [activeSection, setActiveSection] = useState("Turnos");

  return (
    <div>
      <nav className="admin-navbar">
        <ul>
          <li
            className={activeSection === "Turnos" ? "active" : ""}
            onClick={() => setActiveSection("Turnos")}
          >
            Turnos
          </li>
          <li
            className={activeSection === "Servicios" ? "active" : ""}
            onClick={() => setActiveSection("Servicios")}
          >
            Servicios
          </li>
          <li
            className={activeSection === "Profesionales" ? "active" : ""}
            onClick={() => setActiveSection("Profesionales")}
          >
            Profesionales
          </li>
        </ul>
      </nav>

      <main className="admin-content">
        {activeSection === "Turnos" && <TurnosSection />}
        {/* Las otras secciones las agregamos después */}
      </main>
    </div>
  );
};

export default AppAdmin;
