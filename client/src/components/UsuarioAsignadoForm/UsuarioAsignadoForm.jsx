import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUsuarioAsignado } from '../../redux/actions/store/usuarioAsignado';

const UsuarioAsignadoForm = () => {
    const dispatch = useDispatch();

    const initialState = {
        nombre: '',
        correo: '',
        dispositivoId: '',
        sectorId: ''
    };

    const [nuevoUsuarioAsignado, setNuevoUsuarioAsignado] = useState(initialState);
    const [error, setError] = useState({});

    // Manejo de cambios en los inputs
    const handleChange = (event) => {
        const { name, value } = event.target;
        setNuevoUsuarioAsignado({ ...nuevoUsuarioAsignado, [name]: value });
    };

    // Validación del formulario
    const validarFormulario = () => {
        const newErrors = {};
        Object.keys(nuevoUsuarioAsignado).forEach((key) => {
            if (!nuevoUsuarioAsignado[key]) {
                newErrors[key] = `El campo ${key} es obligatorio`;
            }
        });

        setError(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Envío del formulario
    const handleSubmit = (event) => {
        event.preventDefault();

        if (!validarFormulario()) return;

        dispatch(createUsuarioAsignado(nuevoUsuarioAsignado));

        setNuevoUsuarioAsignado(initialState);
        setError({});
    };

    return (
        <div className="container mt-4">
            <h2>Agregar Usuario Asignado</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={nuevoUsuarioAsignado.nombre}
                        onChange={handleChange}
                        className={`form-control ${error.nombre ? 'is-invalid' : ''}`}
                    />
                    {error.nombre && <div className="invalid-feedback">{error.nombre}</div>}
                </div>

                <div className="form-group">
                    <label htmlFor="correo">Correo:</label>
                    <input
                        type="email"
                        id="correo"
                        name="correo"
                        value={nuevoUsuarioAsignado.correo}
                        onChange={handleChange}
                        className={`form-control ${error.correo ? 'is-invalid' : ''}`}
                    />
                    {error.correo && <div className="invalid-feedback">{error.correo}</div>}
                </div>

                <div className="form-group">
                    <label htmlFor="dispositivoId">ID del Dispositivo:</label>
                    <input
                        type="text"
                        id="dispositivoId"
                        name="dispositivoId"
                        value={nuevoUsuarioAsignado.dispositivoId}
                        onChange={handleChange}
                        className={`form-control ${error.dispositivoId ? 'is-invalid' : ''}`}
                    />
                    {error.dispositivoId && <div className="invalid-feedback">{error.dispositivoId}</div>}
                </div>

                <div className="form-group">
                    <label htmlFor="sectorId">ID del Sector:</label>
                    <input
                        type="text"
                        id="sectorId"
                        name="sectorId"
                        value={nuevoUsuarioAsignado.sectorId}
                        onChange={handleChange}
                        className={`form-control ${error.sectorId ? 'is-invalid' : ''}`}
                    />
                    {error.sectorId && <div className="invalid-feedback">{error.sectorId}</div>}
                </div>

                <button type="submit" className="btn btn-primary mt-3">Agregar Usuario Asignado</button>
            </form>
        </div>
    );
};

export default UsuarioAsignadoForm;
