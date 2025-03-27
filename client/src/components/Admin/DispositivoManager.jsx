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
        <div>
            <h1>Gestión de Dispositivos</h1>
            <table>
                <thead>
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
                            <td>{dispositivo.estado ? 'Activo' : 'Inactivo'}</td>
                            <td>
                                <button onClick={() => handleStatus(dispositivo._id)}>
                                    Cambiar Estado
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <h2>Crear Nuevo Dispositivo</h2>
                <form>
                    <label htmlFor="tipo">Tipo de Dispositivo:</label>
                    <select id="tipo" name="tipo" value={tipoDispositivo} onChange={handleTipoChange}>
                        <option value="computadora">Computadora</option>
                        <option value="impresora">Impresora</option>
                    </select>
                    {tipoDispositivo === 'computadora' && (
                        <>
                            <label htmlFor="procesador">Procesador:</label>
                            <input type="text" id="procesador" name="procesador" />
                            <label htmlFor="ram">Memoria RAM:</label>
                            <input type="text" id="ram" name="ram" />
                        </>
                    )}
                    {tipoDispositivo === 'impresora' && (
                        <>
                            <label htmlFor="tipoImpresion">Tipo de Impresión:</label>
                            <input type="text" id="tipoImpresion" name="tipoImpresion" />
                            <label htmlFor="velocidad">Velocidad de Impresión:</label>
                            <input type="text" id="velocidad" name="velocidad" />
                        </>
                    )}
                    <button type="submit">Crear</button>
                </form>
            </div>
        </div>
    );
};

export default DispositivoManager;
