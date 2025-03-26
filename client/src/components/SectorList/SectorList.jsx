import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSectores, getSectorById } from '../../redux/actions/store/sector';

const SectoresList = () => {
    const dispatch = useDispatch();
    const { sectores, loading, error } = useSelector((state) => state.sectores);
    const { sector, loading: loadingSector, error: errorSector } = useSelector((state) => state.sector);
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        dispatch(getSectores());
    }, [dispatch]);

    const handleSelectSector = (id) => {
        setSelectedId(id);
        dispatch(getSectorById(id));
    };

    return (
        <div className="container mt-4">
            <h2>Sectores</h2>
            {loading ? (
                <p>Cargando sectores...</p>
            ) : error ? (
                <p className="error">{error}</p>
            ) : (
                <ul className="list-group">
                    {sectores.map((sector) => (
                        <li key={sector.id} className="list-group-item">
                            {sector.nombre} 
                            <button onClick={() => handleSelectSector(sector.id)} className="btn btn-link">
                                Ver Detalles
                            </button>
                        </li>
                    ))}
                </ul>
            )}

            {selectedId && (
                <div className="sector-detalle mt-4">
                    <h3>Detalles del Sector</h3>
                    {loadingSector ? (
                        <p>Cargando...</p>
                    ) : errorSector ? (
                        <p className="error">{errorSector}</p>
                    ) : (
                        sector && (
                            <div>
                                <p><strong>ID:</strong> {sector.id}</p>
                                <p><strong>Nombre:</strong> {sector.nombre}</p>
                                <p><strong>Descripción:</strong> {sector.descripcion}</p>
                                {/* Agrega más campos según lo que necesites mostrar */}
                            </div>
                        )
                    )}
                </div>
            )}
        </div>
    );
};

export default SectoresList;
