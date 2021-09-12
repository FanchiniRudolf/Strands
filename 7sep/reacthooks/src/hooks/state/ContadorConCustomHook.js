import React from 'react';
import { useContador } from '../../custom/useContador';

export const ContadorConCustomHook = () => {

    //Desestructuramos el custom hook
    const { state, increment, decrement, reset } = useContador(100);
    return ( <>
        <h1 > Contador con Custom Hook: {
            state
        } </h1><hr/> 
        {/*Llamamos la función increment, la cual necesita un argumento que corresponde al factor deincremento. 
        */} 
        <button className = "btn btn-primary" onClick = {() => increment(2)}> INCREMENTAR </button>
        {/*
        Llamamos la función reset, la cual necesita no necesitaargumentos, por lo que podemos invocarla como 'reset'.
        */}
        <button className="btn btn-primary" onClick={reset}>RESETEAR</button > 
        {/*Llamamos la función decrement, la cual necesita un argumento que corresponde al factor dedecremento. 
        */} 
        <button className = "btn btn-primary" onClick = {() => decrement(2)}> DECREMENTAR </button>
        </> 
    )
}