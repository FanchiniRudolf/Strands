import {getCookie, setCookie} from '../Functions/Cookies'

export const collectionReducer = (state = [], action) => {
    let cookieJar;
    switch (action.type) {
        //Se dispara con la acción de agregar un todo.
        case 'add':
            console.log("add", action.payload, typeof action.payload);
            cookieJar = [...state, Number(action.payload)];
            break;

        case 'delete':
            cookieJar = state.filter(game => game !== action.payload);
            break;

        default:
            cookieJar = state;
            break;
    }
    setCookie('videogames', cookieJar);
    return cookieJar;
}


export const init = () => {
    //Regresamos el contenido de localStorage como estado inicial. Si lo que obtenemos de localStorage regresa
    // null entonces regresamos un arreglo vacío [].
    return getCookie('videogames') || [];
}