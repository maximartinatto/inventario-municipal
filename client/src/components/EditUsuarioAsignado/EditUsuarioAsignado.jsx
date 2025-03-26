import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUsuarioAsignado, deleteUsuarioAsignado } from '../../redux/actions/store/usuarioAsignado';
import { useParams, useNavigate } from 'react-router-dom';

const EditUsuarioAsignado = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams(); // Obteniendo el id del usuario asignado de la URL
    const { usuarioAsignado, loading, error } = useSelector((state) => state.usuarioAsignado);
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        dispositivoId: '',
        sectorId: ''
    });
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (usuarioAsignado) {
            setFormData(usuarioAsignado);
        }
    }, [usuarioAsignado]);

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
        dispatch(updateUsuarioAsignado(id, formData));
        navigate('/usuarios-asignados'); // Redirige a la lista de usuarios asignados después de la actualización
    };

    const handleDelete = () => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este usuario asignado?')) {
            dispatch(deleteUsuarioAsignado(id));
            navigate('/usuarios-asignados'); // Redirige a la lista de usuarios asignados después de eliminar
        }
    };

    if (loading) return <p>Cargando...</p>;
    if (error) return <p className="error">{error}</p>;

    return (
        <div className="container mt-4">
            <h2>Editar Usuario Asignado</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        className={`form-control ${errorMessage ? 'is-invalid' : ''}`}
                    />
                    {errorMessage && <div className="invalid-feedback">{errorMessage}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="correo">Correo:</label>
                    <input
                        type="email"
                        id="correo"
                        name="correo"
                        value={formData.correo}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="dispositivoId">ID del Dispositivo:</label>
                    <input
                        type="text"
                        id="dispositivoId"
                        name="dispositivoId"
                        value={formData.dispositivoId}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="sectorId">ID del Sector:</label>
                    <input
                        type="text"
                        id="sectorId"
                        name="sectorId"
                        value={formData.sectorId}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Actualizar Usuario Asignado</button>
                <button type="button" className="btn btn-danger mt-3 ms-2" onClick={handleDelete}>
                    Eliminar Usuario Asignado
                </button>
            </form>
        </div>
    );
};

export default EditUsuarioAsignado;
