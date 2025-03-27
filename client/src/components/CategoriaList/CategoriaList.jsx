import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategorias, getCategoriaById } from '../../redux/actions/store/categoria';

const CategoriasList = () => {
    const dispatch = useDispatch();
    const { categorias, loading, error } = useSelector((state) => state.categorias);
    const { categoria, loading: loadingCategoria, error: errorCategoria } = useSelector((state) => state.store.categoria);
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        dispatch(getCategorias());
    }, [dispatch]);

    const handleSelectCategoria = (id) => {
        setSelectedId(id);
        dispatch(getCategoriaById(id));
    };

    return (
        <div className="categorias-container">
            <h2>Categorías</h2>
            {loading ? (
                <p>Cargando categorías...</p>
            ) : error ? (
                <p className="error">{error}</p>
            ) : (
                <ul>
                    {categorias.map((cat) => (
                        <li key={cat.id}>
                            {cat.nombre} 
                            <button onClick={() => handleSelectCategoria(cat.id)}>Ver Detalles</button>
                        </li>
                    ))}
                </ul>
            )}

            {selectedId && (
                <div className="categoria-detalle">
                    <h3>Detalles de la Categoría</h3>
                    {loadingCategoria ? (
                        <p>Cargando...</p>
                    ) : errorCategoria ? (
                        <p className="error">{errorCategoria}</p>
                    ) : (
                        categoria && (
                            <div>
                                <p><strong>ID:</strong> {categoria.id}</p>
                                <p><strong>Nombre:</strong> {categoria.nombre}</p>
                            </div>
                        )
                    )}
                </div>
            )}
        </div>
    );
};

export default CategoriasList;
