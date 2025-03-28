import React from "react";
import { Link } from "react-router-dom";

const CategoriaCard = ({ id, nombre }) => {
  return (
    <div className="container mt-3">
      <Link
        to={`/categorias/${id}`}
        className="btn btn-outline-primary btn-block text-center"
      >
        {nombre}
      </Link>
    </div>
  );
};

export default CategoriaCard;
