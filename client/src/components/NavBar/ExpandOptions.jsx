import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import OptionLogged from './OptionLogged';
import OptionAnonimous from './OptionAnonimous';
import { logout } from '../../redux/actions/user/logout';


const ExpandOptions = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleLogout = () => {
        dispatch(logout);
        localStorage.setItem("loggedIn", false);
        navigate('/');
    }

    return (
        <div>
            {localStorage.getItem("loggedIn") === "true" ? <OptionLogged handleLogout={handleLogout} /> : <OptionAnonimous />}
        </div>
    )
}

export default ExpandOptions;