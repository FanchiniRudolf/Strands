import React, {useCallback ,useState } from 'react';
import { MuestraIncremento } from './MuestraIncremento';

export const HookCallback = () => {
    const [counter, setCounter] = useState(10);
    //Función de incremento que se va pasar como argumento al componente hijo.
    const increment = useCallback((num) => {
        setCounter(counter => counter + num);
        },[setCounter]);
    return (
        <>
            <h1>Hook useCallBack</h1>
            <hr />
            <p>Counter = {counter}</p>
            {/*Mandamos llamar al componente hijo*/}
            <MuestraIncremento incrementFn={increment}/>
        </>
        )
    }