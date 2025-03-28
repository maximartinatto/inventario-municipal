import React from "react";
import { Link } from "react-router-dom";

const DispositivoCard = ({
  id,
  nombre,
  tipo,
  marca,
  modelo,
  numero_serie,
  procesador,
  ram,
  almacenamiento,
  tipo_impresora,
  toner,
  tecnologia_impresion,
  sector_id,
  usuario_id,
  categoria_id,
  reparaciones_id,
  fecha_adquisicion,
  fecha_finalizacion,
  estado,
}) => {
  return (
    <div className="card mt-3">
      <Link
        to={`/dispositivos/${id}`}
        className="text-decoration-none text-dark"
      >
        <div className="card-body">
          <h3 className="card-title">{`Nombre: ${nombre}`}</h3>
          <p className="card-text">{`Marca: ${marca}`}</p>
          <p className="card-text">{`Modelo: ${modelo}`}</p>
          <p className="card-text">{`Número de Serie: ${numero_serie}`}</p>

          {tipo === "Computadora" && (
            <>
              <p className="card-text">{`Procesador: ${procesador}`}</p>
              <p className="card-text">{`RAM: ${ram}`}</p>
              <p className="card-text">{`Almacenamiento: ${almacenamiento}`}</p>
            </>
          )}

          {tipo === "Impresora" && (
            <>
              <p className="card-text">{`Tipo de Impresora: ${tipo_impresora}`}</p>
              <p className="card-text">{`Toner: ${toner}`}</p>
              <p className="card-text">{`Tecnología de Impresión: ${tecnologia_impresion}`}</p>
            </>
          )}

          <p className="card-text">{`Sector ID: ${sector_id}`}</p>
          <p className="card-text">{`Usuario ID: ${usuario_id}`}</p>
          <p className="card-text">{`Categoría ID: ${categoria_id}`}</p>
          <p className="card-text">{`Reparaciones ID: ${reparaciones_id}`}</p>
          <p className="card-text">{`Fecha de Adquisición: ${fecha_adquisicion}`}</p>
          <p className="card-text">{`Fecha de Finalización: ${fecha_finalizacion}`}</p>
          <p className="card-text">{`Estado: ${estado}`}</p>
        </div>
      </Link>
    </div>
  );
};

export default DispositivoCard;
