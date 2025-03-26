import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createDispositivo } from '../../redux/actions/store/dispositivo';

const DispositivoForm = () => {
    const dispatch = useDispatch();

    const initialState = {
        nombre: '',
        tipo: '',
        marca: '',
        modelo: '',
        numeroSerie: '',
        procesador: '',
        ram: '',
        almacenamiento: '',
        tipoImpresora: '',
        toner: '',
        tecnologiaImpresion: '',
        sectorId: '',
        usuarioId: '',
        categoriaId: '',
        reparacionesId: '',
        fechaAdquisicion: '',
        fechaFinalizacionReparacion: '',
        estado: ''
    };

    const [nuevoDispositivo, setNuevoDispositivo] = useState(initialState);
    const [error, setError] = useState({});

    // Manejo de cambios en los inputs
    const handleChange = (event) => {
        const { name, value } = event.target;
        setNuevoDispositivo({ ...nuevoDispositivo, [name]: value });
    };

    // Validación del formulario
    const validarFormulario = () => {
        const newErrors = {};
        Object.keys(nuevoDispositivo).forEach((key) => {
            if (!nuevoDispositivo[key]) {
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

        dispatch(createDispositivo(nuevoDispositivo));

        setNuevoDispositivo(initialState);
        setError({});
    };

    return (
        <div className="container mt-4">
            <h2>Agregar Dispositivo</h2>
            <form onSubmit={handleSubmit}>
                {Object.keys(initialState).map((key) => (
                    <div className="form-group" key={key}>
                        <label htmlFor={key}>{key.replace(/([A-Z])/g, ' $1').toUpperCase()}</label>
                        <input
                            type="text"
                            id={key}
                            name={key}
                            value={nuevoDispositivo[key]}
                            onChange={handleChange}
                            className={`form-control ${error[key] ? 'is-invalid' : ''}`}
                        />
                        {error[key] && <div className="invalid-feedback">{error[key]}</div>}
                    </div>
                ))}
                <button type="submit" className="btn btn-primary mt-3">Agregar</button>
            </form>
        </div>
    );
};

export default DispositivoForm;

