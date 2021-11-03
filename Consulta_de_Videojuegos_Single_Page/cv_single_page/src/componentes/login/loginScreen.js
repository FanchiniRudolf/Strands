import React, {useState, useContext} from 'react';
//Los componentes por default tienen implícitas unas props que son history, location, match, y staticContext.
//Vamos a utilizar el prop 'history' para poder navegar a la ruta '/'
import { setCookie } from '../../Functions/Cookies';
import { useHistory } from "react-router-dom";
import { UserContext } from '../../hooks/userContext';

export const LoginScreen = () => {

    const history = useHistory();

    const {user} = useContext(UserContext);
    const {setUser} =  useContext(UserContext); 
    
    const [pass, setPass] = useState();
    console.log(setPass)
    console.log(setUser)
    console.log(user)

    const handleUserChange = (e) => {
        setUser(e.target.value);
    }

    const handlePassChange = (e) => {
        setPass(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Se hizo submit...');

        if (user === "admin" && pass == "password") {
            doLogin()
        }
    }

    const doLogin = () => {
        setCookie("loggedIn", true);
        history.push('/home');
        //history.replace('/home');
    }
    return (
        <>
            <h1>Login</h1>
            <br />
            <input type="email" id="typeEmail" class="form-control" 
            onChange={ handleUserChange }/>
            <input type="password" id="typePassword" class="form-control" 
            onChange={ handlePassChange }/>
            <button className="btn btn-primary"
                onClick={handleSubmit}>
                Ingresar
            </button>
        </>
    )
}