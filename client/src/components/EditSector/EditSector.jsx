import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSector, deleteSector } from '../../redux/actions/store/sector';
import { useParams, useNavigate } from 'react-router-dom';

const EditSector = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams(); // Obteniendo el id del sector de la URL
    const { sector, loading, error } = useSelector((state) => state.sector);
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (sector) {
            setNombre(sector.nombre);
            setDescripcion(sector.descripcion);
        }
    }, [sector]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!nombre.trim()) {
            setErrorMessage('El nombre es obligatorio');
            return;
        }
        dispatch(updateSector(id, { nombre, descripcion }));
        navigate('/sectores'); // Redirige a la lista de sectores después de la actualización
    };

    const handleDelete = () => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este sector?')) {
            dispatch(deleteSector(id));
            navigate('/sectores'); // Redirige a la lista de sectores después de eliminar
        }
    };

    if (loading) return <p>Cargando...</p>;
    if (error) return <p className="error">{error}</p>;

    return (
        <div className="container mt-4">
            <h2>Editar Sector</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        className={`form-control ${errorMessage ? 'is-invalid' : ''}`}
                    />
                    {errorMessage && <div className="invalid-feedback">{errorMessage}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="descripcion">Descripción:</label>
                    <input
                        type="text"
                        id="descripcion"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Actualizar Sector</button>
                <button type="button" className="btn btn-danger mt-3 ms-2" onClick={handleDelete}>
                    Eliminar Sector
                </button>
            </form>
        </div>
    );
};

export default EditSector;
