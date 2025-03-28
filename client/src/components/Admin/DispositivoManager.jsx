import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDispositivos, updateDispositivoEstado } from '../../redux/actions/store/dispositivo';

const DispositivoManager = () => {
    const dispatch = useDispatch();
    const [localDispositivo, setLocalDispositivo] = useState([]);
    const dispositivos = useSelector((state) => state.store.dispositivo);
    const [tipoDispositivo, setTipoDispositivo] = useState('computadora');

    useEffect(() => {
        dispatch(getDispositivos());
    }, [dispatch]);

    useEffect(() => {
        setLocalDispositivo(dispositivos);
    }, [dispositivos]);

    const handleStatus = (id) => {
        dispatch(updateDispositivoEstado(id));
        const updatedDispositivos = localDispositivo.map((dispositivo) =>
            dispositivo._id === id ? { ...dispositivo, estado: !dispositivo.estado } : dispositivo
        );
        setLocalDispositivo(updatedDispositivos);
    };

    const handleTipoChange = (event) => {
        setTipoDispositivo(event.target.value);
    };

    return (
        <div className="container mt-4">
        <h1 className="text-center mb-4">Gestión de Dispositivos</h1>
      
        {/* Tabla de dispositivos */}
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>Nombre</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {localDispositivo.map((dispositivo) => (
                <tr key={dispositivo._id}>
                  <td>{dispositivo.nombre}</td>
                  <td className={dispositivo.estado ? "text-success" : "text-danger"}>
                    {dispositivo.estado ? "Activo" : "Inactivo"}
                  </td>
                  <td>
                    <button className="btn btn-warning btn-sm" onClick={() => handleStatus(dispositivo._id)}>
                      Cambiar Estado
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      
        {/* Formulario de creación */}
        <div className="card mt-4">
          <div className="card-body">
            <h2 className="card-title text-center">Crear Nuevo Dispositivo</h2>
            <form>
              <div className="form-group">
                <label htmlFor="tipo">Tipo de Dispositivo:</label>
                <select id="tipo" name="tipo" className="form-control" value={tipoDispositivo} onChange={handleTipoChange}>
                  <option value="computadora">Computadora</option>
                  <option value="impresora">Impresora</option>
                </select>
              </div>
      
              {tipoDispositivo === "computadora" && (
                <>
                  <div className="form-group">
                    <label htmlFor="procesador">Procesador:</label>
                    <input type="text" id="procesador" name="procesador" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="ram">Memoria RAM:</label>
                    <input type="text" id="ram" name="ram" className="form-control" />
                  </div>
                </>
              )}
      
              {tipoDispositivo === "impresora" && (
                <>
                  <div className="form-group">
                    <label htmlFor="tipoImpresion">Tipo de Impresión:</label>
                    <input type="text" id="tipoImpresion" name="tipoImpresion" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="velocidad">Velocidad de Impresión:</label>
                    <input type="text" id="velocidad" name="velocidad" className="form-control" />
                  </div>
                </>
              )}
      
              <button type="submit" className="btn btn-primary btn-block mt-3">Crear</button>
            </form>
          </div>
        </div>
      </div>
      
    );
};

export default DispositivoManager;
