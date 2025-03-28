import React, { useEffect } from "react";
import DispositivoCard from "../../components/DispositivoCard/DispositivoCard";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCategoriasDispositivos } from "../../redux/actions/store/categoria";
import { clearCategoriaDispositivo } from "../../redux/actions/store/categoria";

const CategoriasDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const dispositivos = useSelector((state) => state.store.categoria);

    useEffect(() => {
        dispatch(getCategoriasDispositivos(id));
        return () => dispatch(clearCategoriaDispositivo())
    }, [dispatch, id]);

    

    return (
        <div>
           {dispositivos?.map(dis => (
            dis.show ? (
                <DispositivoCard
                    key={dis.id}
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

            ): null
           ))}
        </div>
    );
};

export default CategoriasDetail;
