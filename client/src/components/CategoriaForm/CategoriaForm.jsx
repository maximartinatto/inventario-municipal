import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCategoria } from "../../redux/actions/store/categoria";

const CategoriaForm = () => {
  const [nombre, setNombre] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nombre.trim() === "") return; 

    dispatch(createCategoria({ nombre }));
    setNombre("");
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-3">
      <div className="form-group">
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
          className="form-control"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary mt-2">
        Guardar
      </button>
    </form>
  );
};

export default CategoriaForm;
