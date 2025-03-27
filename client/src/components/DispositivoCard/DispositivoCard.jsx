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
    <div>
      <Link to={`/dispositivos/${id}`}>
        <h3>{`Nombre: ${nombre}`}</h3>
        <p>{`Marca: ${marca}`}</p>
        <p>{`Modelo: ${modelo}`}</p>
        <p>{`Número de Serie: ${numero_serie}`}</p>
        {tipo === "Computadora" && (
          <>
            <p>{`Procesador: ${procesador}`}</p>
            <p>{`RAM: ${ram}`}</p>
            <p>{`Almacenamiento: ${almacenamiento}`}</p>
          </>
        )}

        {tipo === "Impresora" && (
          <>
            <p>{`Tipo de Impresora: ${tipo_impresora}`}</p>
            <p>{`Toner: ${toner}`}</p>
            <p>{`Tecnología de Impresión: ${tecnologia_impresion}`}</p>
          </>
        )}
        <p>{`Sector ID: ${sector_id}`}</p>
        <p>{`Usuario ID: ${usuario_id}`}</p>
        <p>{`Categoría ID: ${categoria_id}`}</p>
        <p>{`Reparaciones ID: ${reparaciones_id}`}</p>
        <p>{`Fecha de Adquisición: ${fecha_adquisicion}`}</p>
        <p>{`Fecha de Finalización: ${fecha_finalizacion}`}</p>
        <p>{`Estado: ${estado}`}</p>
      </Link>
    </div>
  );
};

export default DispositivoCard;
