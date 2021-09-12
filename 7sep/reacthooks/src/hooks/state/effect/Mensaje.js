import React, { useEffect,useState } from 'react';


export const Mensaje = () => {

    const [formState, setFormState] = useState({
        x: '',
        y: ''
    });
    const {x,y} = formState;
    //const coordenadas = {x, y};
    //Implementamos useEffect con cleanup. No tiene ninguna dependencia (en su segundo parámetro) por lo cual
    // este useEffect se va ejecutar solamente cuando el componente se ejecute por primera vez.
    useEffect(() => {
        console.log('Componente montado...');
         //Obtenemos las coordenadas X y Y del mouse y las mostramos en la consola del navegador.

    window.addEventListener('mousemove', (e) => {

       const coordenadas = { x: e.x, y: e.y };
        console.log(coordenadas);
        setFormState({...formState, x: e.x, y:e.y})
    });
   
    return () => {
            console.log('Componente desmontado...');
        }
    }, []);
    return (
        <>
            <h3>Coordenadas de mouse</h3>
            <p>coordenada x: {x}</p>
            <p>coordenada y: {y}</p>
        </>
    )
}