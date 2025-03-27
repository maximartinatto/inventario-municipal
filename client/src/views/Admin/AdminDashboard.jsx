import React from "react";
import { Link } from "react-router-dom";
import DispositivoManager from "../../components/Admin/DispositivoManager";
import ReparacionManager from "../../components/Admin/ReparacionManager";
import SectorManager from "../../components/Admin/SectorManager";
import UsuarioAsignadoManager from "../../components/Admin/UsuarioAsignadoManager";

const AdminDashboard = () => {
    return (
        <div>
            <DispositivoManager />
            <ReparacionManager />
            <SectorManager />
            <UsuarioAsignadoManager />
            <div>
                <Link to="/admin/dispositivos">Administrar Dispositivos</Link>
                <Link to="/admin/reparaciones">Administrar Reparaciones</Link>
                <Link to="/admin/sectores">Administrar Sectores</Link>
                <Link to="/admin/usuarioasignado">Administrar Usuarios</Link>
            </div>
        </div>
    )
}

export default AdminDashboard;