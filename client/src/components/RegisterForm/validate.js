const validate = (data) => {
    let errors = {}

    if (!data.email || !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(data.email)) {
        errors.email = 'Por favor ingrese un correo electrónico.'
    }

    if (!data.password || !/^(?=.*[A-Z])(?=.*\d).+$/.test(data.password)) {
        errors.password = 'La contraseña debe tener al menos una mayúscula y un número.'
    }

    if (data.password && data.password !== data.repeat) {
        errors.repeat = 'Las contraseñas no coinciden.'
    }

    return errors;

}


export default validate