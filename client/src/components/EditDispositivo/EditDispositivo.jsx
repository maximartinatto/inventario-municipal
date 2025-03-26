import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateDispositivo, deleteDispositivo } from '../../redux/actions/store/dispositivo';
import { useParams, useNavigate } from 'react-router-dom';

const EditDispositivo = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams(); // Obteniendo el id del dispositivo de la URL
    const { dispositivo, loading, error } = useSelector((state) => state.dispositivo);
    const [formData, setFormData] = useState({
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
    });
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (dispositivo) {
            setFormData(dispositivo);
        }
    }, [dispositivo]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!formData.nombre.trim()) {
            setErrorMessage('El nombre es obligatorio');
            return;
        }
        dispatch(updateDispositivo(id, formData));
        navigate('/dispositivos'); // Redirige a la lista de dispositivos después de la actualización
    };

    const handleDelete = () => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este dispositivo?')) {
            dispatch(deleteDispositivo(id));
            navigate('/dispositivos'); // Redirige a la lista de dispositivos después de eliminar
        }
    };

    if (loading) return <p>Cargando...</p>;
    if (error) return <p className="error">{error}</p>;

    return (
        <div className="container mt-4">
            <h2>Editar Dispositivo</h2>
            <form onSubmit={handleSubmit}>
                {Object.keys(formData).map((key) => (
                    <div className="form-group" key={key}>
                        <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
                        <input
                            type="text"
                            id={key}
                            name={key}
                            value={formData[key]}
                            onChange={handleChange}
                            className={`form-control ${errorMessage ? 'is-invalid' : ''}`}
                        />
                        {errorMessage && <div className="invalid-feedback">{errorMessage}</div>}
                    </div>
                ))}
                <button type="submit" className="btn btn-primary mt-3">Actualizar Dispositivo</button>
                <button type="button" className="btn btn-danger mt-3 ms-2" onClick={handleDelete}>
                    Eliminar Dispositivo
                </button>
            </form>
        </div>
    );
};

export default EditDispositivo;
