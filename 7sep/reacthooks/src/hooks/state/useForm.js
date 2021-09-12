import {useState} from 'react';

export const useForm = () => {

    const [state, setState] = useState({
        initialState: {}
    });
    const {initialState} = state;

    const handleInputChange = (e) => {
        //Actualizamos el estado del formulario.
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    return [state, handleInputChange] ;
        
}