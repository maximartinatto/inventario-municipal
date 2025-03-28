import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategorias,
  getCategoriaById,
} from "../../redux/actions/store/categoria";

const CategoriasList = () => {
  const dispatch = useDispatch();
  const { categorias, loading, error } = useSelector(
    (state) => state.categorias
  );
  const {
    categoria,
    loading: loadingCategoria,
    error: errorCategoria,
  } = useSelector((state) => state.store.categoria);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    dispatch(getCategorias());
  }, [dispatch]);

  const handleSelectCategoria = (id) => {
    setSelectedId(id);
    dispatch(getCategoriaById(id));
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Categorías</h2>

      {loading ? (
        <div className="alert alert-info text-center" role="alert">
          Cargando categorías...
        </div>
      ) : error ? (
        <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
      ) : (
        <ul className="list-group">
          {categorias.map((cat) => (
            <li
              key={cat.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {cat.nombre}
              <button
                className="btn btn-outline-primary btn-sm"
                onClick={() => handleSelectCategoria(cat.id)}
              >
                Ver Detalles
              </button>
            </li>
          ))}
        </ul>
      )}

      {selectedId && (
        <div className="categoria-detalle mt-4">
          <h3>Detalles de la Categoría</h3>
          {loadingCategoria ? (
            <div className="alert alert-info" role="alert">
              Cargando...
            </div>
          ) : errorCategoria ? (
            <div className="alert alert-danger" role="alert">
              {errorCategoria}
            </div>
          ) : (
            categoria && (
              <div className="border p-3 rounded">
                <p>
                  <strong>ID:</strong> {categoria.id}
                </p>
                <p>
                  <strong>Nombre:</strong> {categoria.nombre}
                </p>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default CategoriasList;
