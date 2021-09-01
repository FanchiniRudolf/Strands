import React, {useEffect} from 'react';

//Recibe como argumento el género que se va utilizar para hacer la búsqueda de los videojuegos
// utilizando el API de RAWG
export const ResultadoVideojuegos = ({genero}) => {
return(
    <>
        <h3 className="card-title">{genero}</h3>
    </>
    )
}