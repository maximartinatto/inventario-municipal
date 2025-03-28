import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDispositivos } from "../../redux/actions/store/dispositivo";
import DispositivoCard from "../../components/DispositivoCard/DispositivoCard";

const Dispositivos = () => {
    const dispatch = useDispatch();
    const dispositivos = useSelector((state) => state.store.dispositivo);

    useEffect(() => {
        dispatch(getDispositivos());
    }, [dispatch]);

    return (
        <div>
            <h2>Lista de Dispositivos</h2>
            {dispositivos.length === 0 ? (
                <p>No hay dispositivos registrados.</p>
            ) : (
                <div>
                    {dispositivos.map((dis) => (
                        <div key={dis.id}>
                            <DispositivoCard
                                id={dis.id}
                                nombre={dis.nombre}
                                tipo={dis.tipo}
                                marca={dis.marca}
                                modelo={dis.modelo}
                                numero_serie={dis.numero_serie}
                                procesador={dis.procesador}
                                ram={dis.ram}
                                almacenamiento={dis.almacenamiento}
                                tipo_impresora={dis.tipo_impresora}
                                toner={dis.toner}
                                tecnologia_impresion={dis.tecnologia_impresion}
                                sector_id={dis.sector_id}
                                usuario_id={dis.usuario_id}
                                categoria_id={dis.categoria_id}
                                reparaciones_id={dis.reparaciones_id}
                                fecha_adquisicion={dis.fecha_adquisicion}
                                fecha_finalizacion={dis.fecha_finalizacion}
                                estado={dis.estado}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dispositivos;
