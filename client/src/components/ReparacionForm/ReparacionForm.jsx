import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createReparacion } from '../../redux/actions/store/reparacion';

const ReparacionForm = () => {
    const dispatch = useDispatch();

    const initialState = {
        descripcion: '',
        dispositivoId: '',
        fechaInicio: '',
        fechaFin: '',
        estado: ''
    };

    const [nuevaReparacion, setNuevaReparacion] = useState(initialState);
    const [error, setError] = useState({});

    // Manejo de cambios en los inputs
    const handleChange = (event) => {
        const { name, value } = event.target;
        setNuevaReparacion({ ...nuevaReparacion, [name]: value });
    };

    // Validación del formulario
    const validarFormulario = () => {
        const newErrors = {};
        Object.keys(nuevaReparacion).forEach((key) => {
            if (!nuevaReparacion[key]) {
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

        dispatch(createReparacion(nuevaReparacion));

        setNuevaReparacion(initialState);
        setError({});
    };

    return (
        <div className="container mt-4">
            <h2>Agregar Reparación</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="descripcion">Descripción:</label>
                    <input
                        type="text"
                        id="descripcion"
                        name="descripcion"
                        value={nuevaReparacion.descripcion}
                        onChange={handleChange}
                        className={`form-control ${error.descripcion ? 'is-invalid' : ''}`}
                    />
                    {error.descripcion && <div className="invalid-feedback">{error.descripcion}</div>}
                </div>

                <div className="form-group">
                    <label htmlFor="dispositivoId">ID del Dispositivo:</label>
                    <input
                        type="text"
                        id="dispositivoId"
                        name="dispositivoId"
                        value={nuevaReparacion.dispositivoId}
                        onChange={handleChange}
                        className={`form-control ${error.dispositivoId ? 'is-invalid' : ''}`}
                    />
                    {error.dispositivoId && <div className="invalid-feedback">{error.dispositivoId}</div>}
                </div>

                <div className="form-group">
                    <label htmlFor="fechaInicio">Fecha de Inicio:</label>
                    <input
                        type="date"
                        id="fechaInicio"
                        name="fechaInicio"
                        value={nuevaReparacion.fechaInicio}
                        onChange={handleChange}
                        className={`form-control ${error.fechaInicio ? 'is-invalid' : ''}`}
                    />
                    {error.fechaInicio && <div className="invalid-feedback">{error.fechaInicio}</div>}
                </div>

                <div className="form-group">
                    <label htmlFor="fechaFin">Fecha de Finalización:</label>
                    <input
                        type="date"
                        id="fechaFin"
                        name="fechaFin"
                        value={nuevaReparacion.fechaFin}
                        onChange={handleChange}
                        className={`form-control ${error.fechaFin ? 'is-invalid' : ''}`}
                    />
                    {error.fechaFin && <div className="invalid-feedback">{error.fechaFin}</div>}
                </div>

                <div className="form-group">
                    <label htmlFor="estado">Estado:</label>
                    <input
                        type="text"
                        id="estado"
                        name="estado"
                        value={nuevaReparacion.estado}
                        onChange={handleChange}
                        className={`form-control ${error.estado ? 'is-invalid' : ''}`}
                    />
                    {error.estado && <div className="invalid-feedback">{error.estado}</div>}
                </div>

                <button type="submit" className="btn btn-primary mt-3">Agregar Reparación</button>
            </form>
        </div>
    );
};

export default ReparacionForm;
