import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/user/login';
import Greetings from '../Greetings/Greetings';

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [form, setForm] = useState({
        email: '',
        password: ''
    });
    const [showGreetings, setShowGreetings] = useState(false);

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await dispatch(login(form));

        const loggedIn = localStorage.getItem('loggedIn');
        if (loggedIn) {
            setShowGreetings(true);

            setTimeout(() => {
                setShowGreetings(false);
                navigate('/');
            }, 2000);
        }
    }

    return (
        <div>
            {showGreetings && <Greetings />}
            <h2>Inicie Sesión</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Contraseña</label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );

}

export default LoginForm;