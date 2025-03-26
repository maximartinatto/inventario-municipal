import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import ExpandOptions from "./ExpandOptions";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const expand = () => {
        setShowMenu(!showMenu);
    }

    return (
        <div>
            <Link to="/">
                Inicio
            </Link>
            <Link to="/categorias">
                Categorias
            </Link>
            <Link to="/dispositivos">
                Dispositivos
            </Link>
            <Link to="/">
                Admin Dashboard
            </Link>
            <button onClick={expand}>
                <FaUserCircle />
                {showMenu && <ExpandOptions />}
            </button>
        </div>
    );
};

export default Navbar;