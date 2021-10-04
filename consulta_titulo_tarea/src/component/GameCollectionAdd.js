import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { collectionReducer } from '../functions/collectionReducer';

export const AgregarTitulo = ({setTitulos}) => {
    //En la variable inputValue siempre vamos a tener el último valor que el usuario escribió en
    // el input text.
    const [inputValue, setInputValue] = useState('Indica el Título');

    //Esta función se invoca cada vez que se detecta el evento onChange en el input text.
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    //Esta función se invoca cada vez que se presiona la tecla enter en el input text.
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Se hizo submit...');

        if (0 < Number(inputValue)) {
            setTitulos( estadoActualTitulos => [inputValue, ...estadoActualTitulos]);
            setInputValue('');
        }
    }

    return (
        /*
        Quitamos el fragment <></> y lo cambiamos por un form para poder invocar la función
        de handleSubmit.
        */
        <form onSubmit={handleSubmit}>
            {/*
Creamos un input text para que el usuario escriba el videojuego que quiere
agregar a la lista, y hacemos un binding a la variable inputValue en la que vamos a guardar
lo que escriba el usuario en este input text.
Cada vez que se escriba algo en el input text se manda llamar la función handleInputCange la
cual va actualizar el estado de la variable inputValue.
*/}
            <div className="input-group input-group-sm mb-3">
                <input 
                    type="text"
                    value={inputValue}
                    onChange={ handleInputChange /*TODO make not avaialbe to submit*/ }
                    className="form-control"
                />
                <button type="submit">Agregar</button>
            </div>
        </form>
)
}

AgregarTitulo.propTypes = {
    setTitulos: PropTypes.func.isRequired
}