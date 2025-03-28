import React from "react";
import { Link } from "react-router-dom";

const ReparacionCard = ({id, nombre, numero_orden, fecha_inicio, tecnico_recepcion, tecnico_reparacion, estado_reparacion, observaciones_reparacion, fecha_fin, contacto_entrega, usuarioId, dispositivoId}) => {
    return (
        <div>
            <Link to={`/reparaciones/${id}`}>
                <h3>{`Nombre: ${nombre}`}</h3>
                <p>{`Número de Orden: ${numero_orden}`}</p>
                <p>{`Fecha de Inicio: ${fecha_inicio}`}</p>
                <p>{`Técnico Recepción: ${tecnico_recepcion}`}</p>
                <p>{`Técnico Reparación: ${tecnico_reparacion}`}</p>
                <p>{`Estado Reparación: ${estado_reparacion}`}</p>
                <p>{`Observaciones: ${observaciones_reparacion}`}</p>
                <p>{`Fecha de Fin: ${fecha_fin}`}</p>
                <p>{`Contacto Entrega: ${contacto_entrega}`}</p>
                <p>{`Usuario ID: ${usuarioId}`}</p>
                <p>{`Dispositivo ID: ${dispositivoId}`}</p>
            </Link>
        </div>
    )
}

export default ReparacionCard;