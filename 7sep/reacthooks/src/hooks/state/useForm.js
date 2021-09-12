import React, {useState} from 'react';

export const useForm = () => {

    const [state, setState] = useState({
        estadoInicial: []
    });
    const {estadoInicial} = state;

    const handleInputChange = (e) => {
        //Actualizamos el estado del formulario.s
        setState({...State, estadoInicial: e.estadoInicial})
    }

    return ( 
        <div>
            {estadoInicial}
            {handleInputChange}
        </div>
        
        )
        // <>
        //  <h1> State {estadoInicial} </h1>
        //  <h1> referencia {referencia}</h1>
        //  onChange = {handleInputChange}
        //  <hr/>  
        // </> 
    //) 
}