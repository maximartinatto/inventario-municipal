import React from "react";
import { Link } from "react-router-dom";

const OptionLogged = ({ handleLogout }) => {
    console.log(localStorage);
    return (
        <div>
            <Link to="/perfil">
                Perfil
            </Link>
            <button onClick={handleLogout}>
                Cerrar Sesión
            </button>
        </div>
    );
};

export default OptionLogged;