import { useState, useEffect, useRef } from 'react';

export const useFetch = (url) => {

    //Utilizamos el hook useRef para saber si el componente está montado, y así evitar el error que se comenta
    // en UseRefMultipleCustomHooks.js. El valor inicial de isMounted lo ponemos en 'true' para indicar que está
    // montado la primera vez.
    const isMounted = useRef(true);

    //Inicializamos el estado de la información.
    const [state, setState] = useState({
        info: null,
        loading: true, //IDENTIFICAR si sigue en fetch
        error: null
    });

    //Creamos un useEffect que se ejecute cuando el componente se cargue por primera vez (por eso recibe [] en
    // el segundo parámetro)
    useEffect(() => {
        //Cuando el efecto se desmonte, se ejecuta la función 'return.
        return () => {
            isMounted.current = false;
        }
    }, []);

    //Utilizamos un useEffect para indicar que se actualice el estado cada vez que la url cambie.
    useEffect(() => {
        //Inicializamos el estado con loading = true para las siguientes invocaciones.
        setState({ info:null, loading: true, error:null });
        
        //Invocamos la URL con 'fetch'. Esta función devuelve un Promise por lo que podemos utilizar la
        // función 'then'.
        fetch(url)
            .then((respuesta) => {
                return respuesta.json()
            })
            .then((info) => {  
                //Hacemos el setState solamente si el componente sigue montado. Esto es para evitar el error
                // que se menciona en UseRefEjemploReal.js  
                if(isMounted.current){
                    setState({
                        loading:false,
                        error:null,
                        info
                    });
                }else{
                    console.log('setSate no se llamó porque el componente ya estaba desmontado');} 
                }
            )}, [url]);
            return state;
        }