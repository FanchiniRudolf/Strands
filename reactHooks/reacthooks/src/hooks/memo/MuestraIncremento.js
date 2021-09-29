import React from 'react';

//Componente hijo que recibe como parámetro la función que se va utilizar para incrementar el contador.

export const MuestraIncremento = ({ incrementFn }) => {

 //Mandamos a consola un mensaje cada vez que se genere este componente.
    console.log('Componente creado...');
    return (
        <button
            className="btn btn-primary"
            onClick={() => {
                incrementFn();
            }}
        >
        Incrementar
        </button>
    )
}