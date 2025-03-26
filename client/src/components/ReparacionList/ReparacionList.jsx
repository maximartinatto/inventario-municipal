import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReparaciones, getReparacionById } from '../../redux/actions/store/reparacion';

const ReparacionesList = () => {
    const dispatch = useDispatch();
    const { reparaciones, loading, error } = useSelector((state) => state.reparaciones);
    const { reparacion, loading: loadingReparacion, error: errorReparacion } = useSelector((state) => state.reparacion);
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        dispatch(getReparaciones());
    }, [dispatch]);

    const handleSelectReparacion = (id) => {
        setSelectedId(id);
        dispatch(getReparacionById(id));
    };

    return (
        <div className="container mt-4">
            <h2>Reparaciones</h2>
            {loading ? (
                <p>Cargando reparaciones...</p>
            ) : error ? (
                <p className="error">{error}</p>
            ) : (
                <ul className="list-group">
                    {reparaciones.map((reparacion) => (
                        <li key={reparacion.id} className="list-group-item">
                            {reparacion.descripcion} 
                            <button onClick={() => handleSelectReparacion(reparacion.id)} className="btn btn-link">
                                Ver Detalles
                            </button>
                        </li>
                    ))}
                </ul>
            )}

            {selectedId && (
                <div className="reparacion-detalle mt-4">
                    <h3>Detalles de la Reparación</h3>
                    {loadingReparacion ? (
                        <p>Cargando...</p>
                    ) : errorReparacion ? (
                        <p className="error">{errorReparacion}</p>
                    ) : (
                        reparacion && (
                            <div>
                                <p><strong>ID:</strong> {reparacion.id}</p>
                                <p><strong>Descripción:</strong> {reparacion.descripcion}</p>
                                <p><strong>ID del Dispositivo:</strong> {reparacion.dispositivoId}</p>
                                <p><strong>Fecha de Inicio:</strong> {reparacion.fechaInicio}</p>
                                <p><strong>Fecha de Finalización:</strong> {reparacion.fechaFin}</p>
                                <p><strong>Estado:</strong> {reparacion.estado}</p>
                                {/* Agrega más campos según lo que necesites mostrar */}
                            </div>
                        )
                    )}
                </div>
            )}
        </div>
    );
};

export default ReparacionesList;
