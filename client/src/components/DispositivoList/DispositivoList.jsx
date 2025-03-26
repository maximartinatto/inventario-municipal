import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDispositivos, getDispositivoById } from '../../redux/actions/store/dispositivo';

const DispositivosList = () => {
    const dispatch = useDispatch();
    const { dispositivos, loading, error } = useSelector((state) => state.dispositivos);
    const { dispositivo, loading: loadingDispositivo, error: errorDispositivo } = useSelector((state) => state.dispositivo);
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        dispatch(getDispositivos());
    }, [dispatch]);

    const handleSelectDispositivo = (id) => {
        setSelectedId(id);
        dispatch(getDispositivoById(id));
    };

    return (
        <div className="container mt-4">
            <h2>Dispositivos</h2>
            {loading ? (
                <p>Cargando dispositivos...</p>
            ) : error ? (
                <p className="error">{error}</p>
            ) : (
                <ul className="list-group">
                    {dispositivos.map((dispositivo) => (
                        <li key={dispositivo.id} className="list-group-item">
                            {dispositivo.nombre} 
                            <button onClick={() => handleSelectDispositivo(dispositivo.id)} className="btn btn-link">
                                Ver Detalles
                            </button>
                        </li>
                    ))}
                </ul>
            )}

            {selectedId && (
                <div className="dispositivo-detalle mt-4">
                    <h3>Detalles del Dispositivo</h3>
                    {loadingDispositivo ? (
                        <p>Cargando...</p>
                    ) : errorDispositivo ? (
                        <p className="error">{errorDispositivo}</p>
                    ) : (
                        dispositivo && (
                            <div>
                                <p><strong>ID:</strong> {dispositivo.id}</p>
                                <p><strong>Nombre:</strong> {dispositivo.nombre}</p>
                                <p><strong>Tipo:</strong> {dispositivo.tipo}</p>
                                <p><strong>Marca:</strong> {dispositivo.marca}</p>
                                <p><strong>Modelo:</strong> {dispositivo.modelo}</p>
                                <p><strong>Número de serie:</strong> {dispositivo.numeroSerie}</p>
                                {/* Agrega más campos según lo que necesites mostrar */}
                            </div>
                        )
                    )}
                </div>
            )}
        </div>
    );
};

export default DispositivosList;
