import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsuariosAsignados } from "../../redux/actions/store/usuarioAsignado";
import UsuarioAsignadoCard from "../../components/UsuarioAsignadoCard/UsuarioAsignadoCard";

const UsuariosAsignados = () => {
    const dispatch = useDispatch();
    const usuarios = useSelector((state) => state.store.usuarioAsignado);

    useEffect(() => {
        dispatch(getUsuariosAsignados());
    }, [dispatch])

    return (
        <div>
            <h2>Lista de Usuarios</h2>
            {usuarios.length === 0 ? (
                <p>No hay usuarios registrados</p>
            ) : (
                <div>
                    {usuarios?.map((user) => (
                        <div key={user.id}>
                            <UsuarioAsignadoCard
                                id={user.id}
                                usuario_id={user.usuario_id}
                                nombre={user.nombre}
                                dispositivo_id={user.dispositivo_id}
                                sector_id={user.sector_id}
                                fecha_asignacion={user.fecha_asignacion}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default UsuariosAsignados;