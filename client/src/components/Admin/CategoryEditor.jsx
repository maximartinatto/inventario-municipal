import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCategoria } from '../../redux/actions/store/categoria';

const CategoryEditor = ({ id, onClose } ) => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [isClosed, setIsClosed] = useState(false);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(updateCategoria(id, { name }));
        setIsClosed(true);
    }

    const handleInputChange = (event) => {
        setName(event.target.value);
    };

    useEffect(() => {
        // utilizar el prop onClose para cerrar el modal
        if (isClosed && typeof onClose === 'function') {
            onClose();
            
        }

    }, [isClosed, onClose]);

    // si isClosed es true, se cierra el modal
    if (isClosed) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={() => setIsClosed(true)}>&times;</span>
                <h2>Editar Categoría</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" id="name" value={name} onChange={handleInputChange} />
                    </div>
                    <button type="submit">Guardar</button>
                </form>
            </div>
        </div>
    )
}


export default CategoryEditor;