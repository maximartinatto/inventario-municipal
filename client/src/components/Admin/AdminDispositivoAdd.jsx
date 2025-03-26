import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createDispositivo } from '../../redux/actions/store/dispositivo';

const AdminDispositivoAdd = () => {
    const dispatch = useDispatch();
    // states
    const [nuevoDispositivo, setNuevoDispositivo] = useState({
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

    const [error, setError] = useState({
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

    // functions
    const handleSubmit = (event) => {
        event.preventDefault();

        const newErrors = {};

        if (!nuevoDispositivo.nombre) newErrors.nombre = 'El nombre es obligatorio';
        if (!nuevoDispositivo.tipo) newErrors.tipo = 'El tipo es obligatorio';
        if (!nuevoDispositivo.marca) newErrors.marca = 'La marca es obligatoria';
        if (!nuevoDispositivo.modelo) newErrors.modelo = 'El modelo es obligatorio';
        if (!nuevoDispositivo.numeroSerie) newErrors.numeroSerie = 'El número de serie es obligatorio';
        if (!nuevoDispositivo.procesador) newErrors.procesador = 'El procesador es obligatorio';
        if (!nuevoDispositivo.ram) newErrors.ram = 'La RAM es obligatoria';
        if (!nuevoDispositivo.almacenamiento) newErrors.almacenamiento = 'El almacenamiento es obligatorio';
        if (!nuevoDispositivo.tipoImpresora) newErrors.tipoImpresora = 'El tipo de impresora es obligatorio';
        if (!nuevoDispositivo.toner) newErrors.toner = 'El toner es obligatorio';
        if (!nuevoDispositivo.tecnologiaImpresion) newErrors.tecnologiaImpresion = 'La tecnología de impresión es obligatoria';
        if (!nuevoDispositivo.sectorId) newErrors.sectorId = 'El sector es obligatorio';
        if (!nuevoDispositivo.categoriaId) newErrors.categoriaId = 'La categoria es obligatoria';
        if (!nuevoDispositivo.estado) newErrors.estado = 'El estado es obligatorio';
        if (!nuevoDispositivo.fechaAdquisicion) newErrors.fechaAdquisicion = 'La fecha de adquisición es obligatoria';
        if (!nuevoDispositivo.fechaFinalizacionReparacion) newErrors.fechaFinalizacionReparacion = 'La fecha de finalización de reparación es obligatoria';
        if (!nuevoDispositivo.reparacionesId) newErrors.usuarioId = 'La reparacion es obligatorio';
        
        if (Object.keys(newErrors).length > 0) {
            setError(newErrors);
            return;
        }

        console.log('Formulario enviado con datos: ', nuevoDispositivo);
        dispatch(createDispositivo(nuevoDispositivo));

        setNuevoDispositivo({
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
        setError({});
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNuevoDispositivo({
            ...nuevoDispositivo,
            [event.target.name]: event.target.value
        });
    }

    return (
        <div>
            <h1>Agregar Dispositivo</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre</label>
                    <input type="text" name="nombre" value={nuevoDispositivo.nombre} onChange={handleChange} />
                    {error.nombre && <p>{error.nombre}</p>}
                </div>
                <div>
                    <label>Tipo</label>
                    <input type="text" name="tipo" value={nuevoDispositivo.tipo} onChange={handleChange} />
                    {error.tipo && <p>{error.tipo}</p>}
                </div>
                <div>
                    <label>Marca</label>
                    <input type="text" name="marca" value={nuevoDispositivo.marca} onChange={handleChange} />
                    {error.marca && <p>{error.marca}</p>}
                </div>
                <div>
                    <label>Modelo</label>
                    <input type="text" name="modelo" value={nuevoDispositivo.modelo} onChange={handleChange} />
                    {error.modelo && <p>{error.modelo}</p>}
                </div>
                <div>
                    <label>Número de serie</label>
                    <input type="text" name="numeroSerie" value={nuevoDispositivo.numeroSerie} onChange={handleChange} />
                    {error.numeroSerie && <p>{error.numeroSerie}</p>}
                </div>
                <div>
                    <label>Procesador</label>
                    <input type="text" name="procesador" value={nuevoDispositivo.procesador} onChange={handleChange} />
                    {error.procesador && <p>{error.procesador}</p>}
                </div>
                <div>
                    <label>RAM</label>
                    <input type="text" name="ram" value={nuevoDispositivo.ram} onChange={handleChange} />
                    {error.ram && <p>{error.ram}</p>}
                </div>
                <div>
                    <label>Almacenamiento</label>
                    <input type="text" name="almacenamiento" value={nuevoDispositivo.almacenamiento} onChange={handleChange} />
                    {error.almacenamiento && <p>{error.almacenamiento}</p>}
                </div>
                <div>
                    <label>Tipo de impresora</label>
                    <input type="text" name="tipoImpresora" value={nuevoDispositivo.tipoImpresora} onChange={handleChange} />
                    {error.tipoImpresora && <p>{error.tipoImpresora}</p>}
                </div>
                <div>
                    <label>Toner</label>
                    <input type="text" name="toner" value={nuevoDispositivo.toner} onChange={handleChange} />
                    {error.toner && <p>{error.toner}</p>}
                </div>
                <div>
                    <label>Tecnología de impresión</label>
                    <input type="text" name="tecnologiaImpresion" value={nuevoDispositivo.tecnologiaImpresion} onChange={handleChange} />
                    {error.tecnologiaImpresion && <p>{error.tecnologiaImpresion}</p>}
                </div>
                <div>
                    <label>Sector</label>
                    <input type="text" name="sectorId" value={nuevoDispositivo.sectorId} onChange={handleChange} />
                    {error.sectorId && <p>{error.sectorId}</p>}
                </div>
                <div>
                    <label>Usuario</label>
                    <input type="text" name="usuarioId" value={nuevoDispositivo.usuarioId} onChange={handleChange} />
                    {error.usuarioId && <p>{error.usuarioId}</p>}
                </div>
                <div>
                    <label>Categoria</label>
                    <input type="text" name="categoriaId" value={nuevoDispositivo.categoriaId} onChange={handleChange} />
                    {error.categoriaId && <p>{error.categoriaId}</p>}
                </div>
                <div>
                    <label>Reparaciones</label>
                    <input type="text" name="reparacionesId" value={nuevoDispositivo.reparacionesId} onChange={handleChange} />
                    {error.reparacionesId && <p>{error.reparacionesId}</p>}
                </div>
                <div>
                    <label>Fecha de adquisición</label>
                    <input type="text" name="fechaAdquisicion" value={nuevoDispositivo.fechaAdquisicion} onChange={handleChange} />
                    {error.fechaAdquisicion && <p>{error.fechaAdquisicion}</p>}
                </div>
                <div>
                    <label>Fecha de finalización de reparación</label>
                    <input type="text" name="fechaFinalizacionReparacion" value={nuevoDispositivo.fechaFinalizacionReparacion} onChange={handleChange} />
                    {error.fechaFinalizacionReparacion && <p>{error.fechaFinalizacionReparacion}</p>}
                </div>
                <div>
                    <label>Estado</label>
                    <input type="text" name="estado" value={nuevoDispositivo.estado} onChange={handleChange} />
                    {error.estado && <p>{error.estado}</p>}
                </div>
                <button type="submit">Agregar</button>
            </form>
        </div>
    )
}

export default AdminDispositivoAdd;