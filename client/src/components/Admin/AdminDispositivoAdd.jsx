import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createDispositivo } from "../../redux/actions/store/dispositivo";

const AdminDispositivoAdd = () => {
  const dispatch = useDispatch();
  // states
  const [nuevoDispositivo, setNuevoDispositivo] = useState({
    nombre: "",
    tipo: "",
    marca: "",
    modelo: "",
    numeroSerie: "",
    procesador: "",
    ram: "",
    almacenamiento: "",
    tipoImpresora: "",
    toner: "",
    tecnologiaImpresion: "",
    sectorId: "",
    usuarioId: "",
    categoriaId: "",
    reparacionesId: "",
    fechaAdquisicion: "",
    fechaFinalizacionReparacion: "",
    estado: "",
  });

  const [error, setError] = useState({
    nombre: "",
    tipo: "",
    marca: "",
    modelo: "",
    numeroSerie: "",
    procesador: "",
    ram: "",
    almacenamiento: "",
    tipoImpresora: "",
    toner: "",
    tecnologiaImpresion: "",
    sectorId: "",
    usuarioId: "",
    categoriaId: "",
    reparacionesId: "",
    fechaAdquisicion: "",
    fechaFinalizacionReparacion: "",
    estado: "",
  });

  // functions
  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};

    if (!nuevoDispositivo.nombre) newErrors.nombre = "El nombre es obligatorio";
    if (!nuevoDispositivo.tipo) newErrors.tipo = "El tipo es obligatorio";
    if (!nuevoDispositivo.marca) newErrors.marca = "La marca es obligatoria";
    if (!nuevoDispositivo.modelo) newErrors.modelo = "El modelo es obligatorio";
    if (!nuevoDispositivo.numeroSerie)
      newErrors.numeroSerie = "El número de serie es obligatorio";
    if (!nuevoDispositivo.procesador)
      newErrors.procesador = "El procesador es obligatorio";
    if (!nuevoDispositivo.ram) newErrors.ram = "La RAM es obligatoria";
    if (!nuevoDispositivo.almacenamiento)
      newErrors.almacenamiento = "El almacenamiento es obligatorio";
    if (!nuevoDispositivo.tipoImpresora)
      newErrors.tipoImpresora = "El tipo de impresora es obligatorio";
    if (!nuevoDispositivo.toner) newErrors.toner = "El toner es obligatorio";
    if (!nuevoDispositivo.tecnologiaImpresion)
      newErrors.tecnologiaImpresion =
        "La tecnología de impresión es obligatoria";
    if (!nuevoDispositivo.sectorId)
      newErrors.sectorId = "El sector es obligatorio";
    if (!nuevoDispositivo.categoriaId)
      newErrors.categoriaId = "La categoria es obligatoria";
    if (!nuevoDispositivo.estado) newErrors.estado = "El estado es obligatorio";
    if (!nuevoDispositivo.fechaAdquisicion)
      newErrors.fechaAdquisicion = "La fecha de adquisición es obligatoria";
    if (!nuevoDispositivo.fechaFinalizacionReparacion)
      newErrors.fechaFinalizacionReparacion =
        "La fecha de finalización de reparación es obligatoria";
    if (!nuevoDispositivo.reparacionesId)
      newErrors.usuarioId = "La reparacion es obligatorio";

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }

    console.log("Formulario enviado con datos: ", nuevoDispositivo);
    dispatch(createDispositivo(nuevoDispositivo));

    setNuevoDispositivo({
      nombre: "",
      tipo: "",
      marca: "",
      modelo: "",
      numeroSerie: "",
      procesador: "",
      ram: "",
      almacenamiento: "",
      tipoImpresora: "",
      toner: "",
      tecnologiaImpresion: "",
      sectorId: "",
      usuarioId: "",
      categoriaId: "",
      reparacionesId: "",
      fechaAdquisicion: "",
      fechaFinalizacionReparacion: "",
      estado: "",
    });
    setError({});
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNuevoDispositivo({
      ...nuevoDispositivo,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Agregar Dispositivo</h1>
      <form onSubmit={handleSubmit} className="row g-3">
        {[
          { label: "Nombre", name: "nombre" },
          { label: "Tipo", name: "tipo" },
          { label: "Marca", name: "marca" },
          { label: "Modelo", name: "modelo" },
          { label: "Número de serie", name: "numeroSerie" },
          { label: "Procesador", name: "procesador" },
          { label: "RAM", name: "ram" },
          { label: "Almacenamiento", name: "almacenamiento" },
          { label: "Tipo de impresora", name: "tipoImpresora" },
          { label: "Toner", name: "toner" },
          { label: "Tecnología de impresión", name: "tecnologiaImpresion" },
          { label: "Sector", name: "sectorId" },
          { label: "Usuario", name: "usuarioId" },
          { label: "Categoría", name: "categoriaId" },
          { label: "Reparaciones", name: "reparacionesId" },
          { label: "Fecha de adquisición", name: "fechaAdquisicion" },
          {
            label: "Fecha de finalización de reparación",
            name: "fechaFinalizacionReparacion",
          },
          { label: "Estado", name: "estado" },
        ].map(({ label, name }) => (
          <div className="col-md-6" key={name}>
            <label className="form-label">{label}</label>
            <input
              type="text"
              name={name}
              className={`form-control ${error[name] ? "is-invalid" : ""}`}
              value={nuevoDispositivo[name]}
              onChange={handleChange}
            />
            {error[name] && (
              <div className="invalid-feedback">{error[name]}</div>
            )}
          </div>
        ))}
        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary">
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminDispositivoAdd;
