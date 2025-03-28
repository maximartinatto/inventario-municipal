import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCategoria, deleteCategoria } from '../../redux/actions/store/categoria';
import { useParams, useNavigate } from 'react-router-dom';

const EditCategoria = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams(); // Obteniendo el id de la categoría de la URL
    const { categoria, loading, error } = useSelector((state) => state.store.categoria);
    const [nombre, setNombre] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (categoria) {
            setNombre(categoria.nombre);
        }
    }, [categoria]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!nombre.trim()) {
            setErrorMessage('El nombre es obligatorio');
            return;
        }
        dispatch(updateCategoria(id, { nombre }));
        navigate('/categorias'); // Redirige a la lista de categorías después de la actualización
    };

    const handleDelete = () => {
        if (window.confirm('¿Estás seguro de que deseas eliminar esta categoría?')) {
            dispatch(deleteCategoria(id));
            navigate('/categorias'); // Redirige a la lista de categorías después de eliminar
        }
    };

    if (loading) return <p>Cargando...</p>;
    if (error) return <p className="error">{error}</p>;

    return (
        <div className="container mt-4">
            <h2>Editar Categoría</h2>
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
                <button type="submit" className="btn btn-primary mt-3">Actualizar Categoría</button>
                <button type="button" className="btn btn-danger mt-3 ms-2" onClick={handleDelete}>
                    Eliminar Categoría
                </button>
            </form>
        </div>
    );
};

export default EditCategoria;
