import React from "react";
import { Link } from 'react-router-dom';

const CategoriaCard = ({id, nombre}) => {
    return (
        <div>
            <Link to={`/categorias/${id}`}>
                <p>{`${nombre}`}</p>
            </Link>
        </div>
    )
}

export default CategoriaCard;