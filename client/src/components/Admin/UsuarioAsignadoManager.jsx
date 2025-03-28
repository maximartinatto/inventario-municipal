import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsuariosAsignados } from "../../redux/actions/store/usuarioAsignado";

const UsuarioAsignadoManager = () => {
  const dispatch = useDispatch();
  const usuariosAsignados = useSelector(
    (state) => state.store.usuariosAsignado
  );
  const [localUsuarios, setLocalUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getUsuariosAsignados()).finally(() => setLoading(false));
  }, [dispatch]);

  useEffect(() => {
    setLocalUsuarios(usuariosAsignados);
  }, [usuariosAsignados]);

  if (loading) {
    return <p>Cargando usuarios asignados...</p>;
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Gestión de Usuarios Asignados</h2>

      {localUsuarios.length === 0 ? (
        <div className="alert alert-warning text-center" role="alert">
          No hay usuarios asignados registrados.
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>Usuario ID</th>
                <th>Nombre</th>
                <th>Dispositivo ID</th>
                <th>Sector ID</th>
                <th>Fecha de Asignación</th>
              </tr>
            </thead>
            <tbody>
              {localUsuarios.map((usuario) => (
                <tr key={usuario.id}>
                  <td>{usuario.id}</td>
                  <td>{usuario.usuarioId}</td>
                  <td className="font-weight-bold text-primary">
                    {usuario.nombre}
                  </td>
                  <td>{usuario.dispositivoId}</td>
                  <td>{usuario.sectorId}</td>
                  <td>
                    {new Date(usuario.fechaAsignacion).toLocaleDateString()}
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

export default UsuarioAsignadoManager;
