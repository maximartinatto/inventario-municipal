import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createSector } from '../../redux/actions/store/sector';

const SectorForm = () => {
    const dispatch = useDispatch();

    const initialState = {
        nombre: '',
        descripcion: ''
    };

    const [nuevoSector, setNuevoSector] = useState(initialState);
    const [error, setError] = useState({});

    // Manejo de cambios en los inputs
    const handleChange = (event) => {
        const { name, value } = event.target;
        setNuevoSector({ ...nuevoSector, [name]: value });
    };

    // Validación del formulario
    const validarFormulario = () => {
        const newErrors = {};
        Object.keys(nuevoSector).forEach((key) => {
            if (!nuevoSector[key]) {
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

        dispatch(createSector(nuevoSector));

        setNuevoSector(initialState);
        setError({});
    };

    return (
        <div className="container mt-4">
            <h2>Agregar Sector</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={nuevoSector.nombre}
                        onChange={handleChange}
                        className={`form-control ${error.nombre ? 'is-invalid' : ''}`}
                    />
                    {error.nombre && <div className="invalid-feedback">{error.nombre}</div>}
                </div>

                <div className="form-group">
                    <label htmlFor="descripcion">Descripción:</label>
                    <input
                        type="text"
                        id="descripcion"
                        name="descripcion"
                        value={nuevoSector.descripcion}
                        onChange={handleChange}
                        className={`form-control ${error.descripcion ? 'is-invalid' : ''}`}
                    />
                    {error.descripcion && <div className="invalid-feedback">{error.descripcion}</div>}
                </div>

                <button type="submit" className="btn btn-primary mt-3">Agregar Sector</button>
            </form>
        </div>
    );
};

export default SectorForm;
