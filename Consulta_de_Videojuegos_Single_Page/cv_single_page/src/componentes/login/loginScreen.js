import React from 'react';
//Los componentes por default tienen implícitas unas props que son history, location, match, y staticContext.
//Vamos a utilizar el prop 'history' para poder navegar a la ruta '/'
import { setCookie } from '../../Functions/Cookies';
import { useHistory } from "react-router-dom";

export const LoginScreen = () => {

    const history = useHistory();

    const doLogin = () => {
        setCookie("loggedIn", true);
        history.push('/home');
        //history.replace('/home');
    }
    return (
        <>
            <h1>Login</h1>
            <br />
            <button className="btn btn-primary"
                onClick={doLogin}>
                Ingresar
            </button>
        </>
    )
}