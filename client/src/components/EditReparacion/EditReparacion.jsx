import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateReparacion, deleteReparacion } from '../../redux/actions/store/reparacion';
import { useParams, useNavigate } from 'react-router-dom';

const EditReparacion = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams(); // Obteniendo el id de la reparación de la URL
    const { reparacion, loading, error } = useSelector((state) => state.store.reparacion);
    const [formData, setFormData] = useState({
        descripcion: '',
        dispositivoId: '',
        fechaInicio: '',
        fechaFin: '',
        estado: ''
    });
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (reparacion) {
            setFormData(reparacion);
        }
    }, [reparacion]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!formData.descripcion.trim()) {
            setErrorMessage('La descripción es obligatoria');
            return;
        }
        dispatch(updateReparacion(id, formData));
        navigate('/reparaciones'); // Redirige a la lista de reparaciones después de la actualización
    };

    const handleDelete = () => {
        if (window.confirm('¿Estás seguro de que deseas eliminar esta reparación?')) {
            dispatch(deleteReparacion(id));
            navigate('/reparaciones'); // Redirige a la lista de reparaciones después de eliminar
        }
    };

    if (loading) return <p>Cargando...</p>;
    if (error) return <p className="error">{error}</p>;

    return (
        <div className="container mt-4">
            <h2>Editar Reparación</h2>
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
                <button type="submit" className="btn btn-primary mt-3">Actualizar Reparación</button>
                <button type="button" className="btn btn-danger mt-3 ms-2" onClick={handleDelete}>
                    Eliminar Reparación
                </button>
            </form>
        </div>
    );
};

export default EditReparacion;
