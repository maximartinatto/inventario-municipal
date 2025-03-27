import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReparaciones } from "../../redux/actions/store/reparacion";
import ReparacionCard from "../../components/ReparacionCard/ReparacionCard";

const Reparaciones = () => {
    const dispatch = useDispatch();
    const reparaciones = useSelector((state) => state.store.reparacion);

    useEffect(() => {
        dispatch(getReparaciones());
    }, [dispatch])

    return (
        <div>
            <h2>Lista de Reparaciones</h2>
            {reparaciones.length === 0 ? (
                <p>No hay reparaciones registradas.</p>
            ) : (
                <div>
                    {reparaciones.map((rep) => (
                        <div key={rep.id}>
                            <ReparacionCard
                                id={rep.id}
                                nombre={rep.nombre}
                                numero_orden={rep.numero_orden}
                                fecha_inicio={rep.fecha_inicio}
                                tecnico_recepcion={rep.tecnico_recepcion}
                                tecnico_reparacion={rep.tecnico_reparacion}
                                estado_reparacion={rep.estado_reparacion}
                                observaciones_reparacion={rep.observaciones_reparacion}
                                fecha_fin={rep.fecha_fin}
                                contacto_entrega={rep.contacto_entrega}
                                usuarioId={rep.usuarioId}
                                dispositivoId={rep.dispositivoId}
                            />
                        </div>

                    ))}
                </div>
            )}
        </div>
    )
}

export default Reparaciones;