import React from "react";
import { Link } from "react-router-dom";

const UsuarioAsignadoCard = ({ id, usuario_id, nombre, dispositivo_id, sector_id, fecha_asignacion}) => {
    return (
        <div>
            <Link to={`/usuarioAsignado/${id}`}>
                <h3>{`Id Usuario: ${usuario_id}`}</h3>
                <h4>{`Nombre: ${nombre}`}</h4>
                <h4>{`Dispositivo Id: ${dispositivo_id}`}</h4>
                <h4>{`Sector Id: ${sector_id}`}</h4>
                <h4>{`Fecha de Asignación: ${fecha_asignacion}`}</h4>
            </Link>
        </div>
    )
}

export default UsuarioAsignadoCard;