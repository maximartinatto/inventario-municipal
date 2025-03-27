import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSectores } from "../../redux/actions/store/sector";

const SectorManager = () => {
    const dispatch = useDispatch();
    const sectores = useSelector((state) => state.store.sector);
    const [localSectores, setLocalSectores] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(getSectores()).finally(() => setLoading(false));
    }, [dispatch]);

    useEffect(() => {
        setLocalSectores(sectores);
    }, [sectores]);

    if (loading) {
        return <p>Cargando sectores...</p>;
    }

    return (
        <div className="container mt-4">
            <h2>Gestión de Sectores</h2>
            {localSectores.length === 0 ? (
                <p>No hay sectores registrados.</p>
            ) : (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Cantidad de Empleados</th>
                        </tr>
                    </thead>
                    <tbody>
                        {localSectores.map((sector) => (
                            <tr key={sector.id}>
                                <td>{sector.id}</td>
                                <td>{sector.nombre}</td>
                                <td>{sector.cantidadEmpleados}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default SectorManager;
