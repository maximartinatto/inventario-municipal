import React from "react";
import { Link } from 'react-router-dom';

const SectorCard = ({id, nombre, cantidadEmpleados }) => {
    return (
        <div>
            <Link to={`/sectores/${id}`}>
                <h3>{`${nombre}`}</h3>
                <p>{`${cantidadEmpleados}`}</p>
            </Link>
        </div>
    )
}

export default SectorCard;