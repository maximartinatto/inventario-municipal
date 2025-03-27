import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReparaciones } from "../../redux/actions/store/reparacion";

const ReparacionManager = () => {
    const dispatch = useDispatch();
    const reparaciones = useSelector((state) => state.store.reparacion);
    const [localReparacion, setLocalReparacion] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(getReparaciones()).finally(() => setLoading(false));
    }, [dispatch]);

    useEffect(() => {
        setLocalReparacion(reparaciones);
    }, [reparaciones]);

    if (loading) {
        return <p>Cargando reparaciones...</p>;
    }

    return (
        <div className="container mt-4">
            <h2>Gestión de Reparaciones</h2>
            {localReparacion.length === 0 ? (
                <p>No hay reparaciones registradas.</p>
            ) : (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Número de Orden</th>
                            <th>Fecha Recepción</th>
                            <th>Técnico Recepción</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {localReparacion.map((rep) => (
                            <tr key={rep.id}>
                                <td>{rep.id}</td>
                                <td>{rep.nombre}</td>
                                <td>{rep.numeroOrden}</td>
                                <td>{new Date(rep.fechaRecepcion).toLocaleDateString()}</td>
                                <td>{rep.tecnicoRecepcion}</td>
                                <td>{rep.estadoReparacion}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ReparacionManager;
