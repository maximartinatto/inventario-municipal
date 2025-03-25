import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createDispositivo } from '../../redux/actions/store/dispositivo';

const AdminDispositivoAdd = ({ history }) => {
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
        
    }
}