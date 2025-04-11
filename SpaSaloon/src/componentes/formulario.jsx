function formulario() {
  return (
    <>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre/s</label>
        <input type="text" className="form-control" id="nombre" placeholder="Juan Pablo" />
      </div>

      <div className="mb-3">
        <label htmlFor="apellido" className="form-label">Apellido</label>
        <input type="text" className="form-control" id="apellido" placeholder="Pérez" />
      </div>

      <div className="mb-3">
        <label htmlFor="correo" className="form-label">Correo</label>
        <input type="email" className="form-control" id="correo" placeholder="ejemplo@correo.com" />
      </div>

      <div className="mb-3">
        <label htmlFor="telefono" className="form-label">Teléfono</label>
        <input type="tel" className="form-control" id="telefono" placeholder="+54 9 362 123-4567" />
      </div>

      <div className="mb-3">
        <label htmlFor="clave" className="form-label">Clave</label>
        <input type="password" className="form-control" id="clave" placeholder="Escribí tu clave" />
      </div>

      <div className="mb-3">
        <label htmlFor="nuevaClave" className="form-label">Nueva clave</label>
        <input type="password" className="form-control" id="nuevaClave" placeholder="Escribí la nueva clave" />
      </div>

      <div className="mb-3">
        <label htmlFor="confirmarClave" className="form-label">Confirmar nueva clave</label>
        <input type="password" className="form-control" id="confirmarClave" placeholder="Repetí la nueva clave" />
      </div>
    </>
  );
}

export default formulario;
