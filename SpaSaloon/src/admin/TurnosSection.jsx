import React, { useState } from "react";

const TurnosSection = () => {
    const [turnoSeleccionado, setTurnoSeleccionado] = useState(null);

    const turnos = [
        {
            id: 1,
            fecha: "2025-04-23",
            hora: "10:00",
            profesional: "Ana López",
            cliente: "Juan Pérez",
            servicio: "Masaje relajante",
            precio: "$2500",
        },
    ];

    const handleAgregar = () => {
        alert("Abrir modal para agregar turno");
    };

    const handleEditar = () => {
        if (turnoSeleccionado) {
            alert(`Editar turno con ID: ${turnoSeleccionado.id}`);
        }
    };

    const handleEliminar = () => {
        if (turnoSeleccionado) {
            alert(`Eliminar turno con ID: ${turnoSeleccionado.id}`);
        }
    };

    return (
        <div>
            <h2>Turnos</h2>
            <button className="btn-agregar" onClick={handleAgregar}>
                Agregar Turno
            </button>

            <table className="tabla">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Profesional</th>
                        <th>Cliente</th>
                        <th>Servicio</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {turnos.map((t) => (
                        <tr
                            key={t.id}
                            onClick={() => setTurnoSeleccionado(t)} 
                            style={{
                                backgroundColor: turnoSeleccionado?.id === t.id ? "#f0f0f0" : "white", 
                            }}
                        >
                            <td>{t.id}</td>
                            <td>{t.fecha}</td>
                            <td>{t.hora}</td>
                            <td>{t.profesional}</td>
                            <td>{t.cliente}</td>
                            <td>{t.servicio}</td>
                            <td>{t.precio}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Botones de acciones de turno (solo habilitados si hay un turno seleccionado) */}
            <div className="acciones-turno">
                <button
                    className="btn-editar"
                    disabled={!turnoSeleccionado}
                    onClick={handleEditar}
                >
                    Editar
                </button>
                <button
                    className="btn-eliminar"
                    disabled={!turnoSeleccionado}
                    onClick={handleEliminar}
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
};

export default TurnosSection;
