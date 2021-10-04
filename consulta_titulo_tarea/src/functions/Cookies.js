
export const getCookie = (cookieID) => {
    //Regresamos el contenido de localStorage como estado inicial. Si lo que obtenemos de localStorage regresa
    // null entonces regresamos un arreglo vacío [].
    return JSON.parse(localStorage.getItem(cookieID)) || [];
}

export const setCookie = (cookieID, cookieVal) => {
    return (localStorage.setItem(cookieID, JSON.stringify(cookieVal))) 
}