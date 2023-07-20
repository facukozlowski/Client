

const validation = (userData) => {
    const errors = {};

    if (!/^[\w.-]+@[a-zA-Z_-]+?\.[a-zA-Z]{2,3}$/.test(userData.email)){
        errors.email = 'el email ingresado no es valido';
    }

    if(!userData.email){
        errors.email = 'Ingrese un mail valido';
    }

    if(userData.email.length > 35){
        errors.email = "El email ingresado no es valido";
    }

    if(/^\d+$/.test(userData.password)){
        errors.password = 'La contraseña debe contener al menos un numero';
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = 'La contraseña debe tener contener de 6 a 10 caracteres'
    }

    return errors;
}

export default validation;