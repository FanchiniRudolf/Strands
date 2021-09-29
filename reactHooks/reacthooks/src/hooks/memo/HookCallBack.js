import { MuestraIncremento } from './MuestraIncremento';
import React, { useCallback, useState } from 'react';

export const HookCallback = () => {

    const [counter, setCounter] = useState(10);
    //Función de incremento que se va pasar como argumento al componente hijo.
    //const increment = () => {
        //setCounter(counter + 1);
    //}

    const increment = useCallback(() => {
        setCounter(c => c + 1);
        }, [setCounter]);

    return (
        <>
            <h1>Hook useCallBack</h1>
            <hr />
            <p>Counter = {counter}</p>
            {/*
            Mandamos llamar al componente hijo
            */}
            <MuestraIncremento incrementFn={increment} />
        </>
    )
}