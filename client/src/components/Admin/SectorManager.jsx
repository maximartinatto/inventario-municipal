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
      <h2 className="text-center mb-4">Gestión de Sectores</h2>

      {localSectores.length === 0 ? (
        <div className="alert alert-info text-center" role="alert">
          No hay sectores registrados.
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
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
                  <td className="font-weight-bold text-primary">
                    {sector.cantidadEmpleados}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SectorManager;
