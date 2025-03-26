import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsuariosAsignados, getUsuarioAsignadoById } from '../../redux/actions/store/usuarioAsignado';

const UsuariosAsignadosList = () => {
    const dispatch = useDispatch();
    const { usuariosAsignados, loading, error } = useSelector((state) => state.usuariosAsignados);
    const { usuarioAsignado, loading: loadingUsuario, error: errorUsuario } = useSelector((state) => state.usuarioAsignado);
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        dispatch(getUsuariosAsignados());
    }, [dispatch]);

    const handleSelectUsuario = (id) => {
        setSelectedId(id);
        dispatch(getUsuarioAsignadoById(id));
    };

    return (
        <div className="container mt-4">
            <h2>Usuarios Asignados</h2>
            {loading ? (
                <p>Cargando usuarios asignados...</p>
            ) : error ? (
                <p className="error">{error}</p>
            ) : (
                <ul className="list-group">
                    {usuariosAsignados.map((usuario) => (
                        <li key={usuario.id} className="list-group-item">
                            {usuario.nombre} 
                            <button onClick={() => handleSelectUsuario(usuario.id)} className="btn btn-link">
                                Ver Detalles
                            </button>
                        </li>
                    ))}
                </ul>
            )}

            {selectedId && (
                <div className="usuario-asignado-detalle mt-4">
                    <h3>Detalles del Usuario Asignado</h3>
                    {loadingUsuario ? (
                        <p>Cargando...</p>
                    ) : errorUsuario ? (
                        <p className="error">{errorUsuario}</p>
                    ) : (
                        usuarioAsignado && (
                            <div>
                                <p><strong>ID:</strong> {usuarioAsignado.id}</p>
                                <p><strong>Nombre:</strong> {usuarioAsignado.nombre}</p>
                                <p><strong>Correo:</strong> {usuarioAsignado.correo}</p>
                                <p><strong>ID del Dispositivo:</strong> {usuarioAsignado.dispositivoId}</p>
                                <p><strong>ID del Sector:</strong> {usuarioAsignado.sectorId}</p>
                                {/* Agrega más campos según lo que necesites mostrar */}
                            </div>
                        )
                    )}
                </div>
            )}
        </div>
    );
};

export default UsuariosAsignadosList;
