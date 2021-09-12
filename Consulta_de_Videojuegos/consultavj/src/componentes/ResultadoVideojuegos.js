import React, {useEffect, useState} from 'react';

//Recibe como argumento el género que se va utilizar para hacer la búsqueda de los videojuegos
// utilizando el API de RAWG
export const ResultadoVideojuegos = ({genero}) => {

    const [infoVideojuegos, setInfoJuegos] = useState([]);

    useEffect( () => {
        getVideojuegos();
    }, [])

    const getVideojuegos = async() => {
        const url = 'https://api.rawg.io/api/games?key=02798a8eb7994b06a56598fff263a25c&genre=' + genero;
        const respuesta = await fetch(url);
        const {results} = await respuesta.json();

        const juegos = results.map( juego => {
            return{
                id: juego.id,
                nombre: juego.name,
                imagen: juego.background_image,
                rating: juego.rating,
                metacritic: juego.metacritic
            }
        })
        console.log(juegos);

        setInfoJuegos(juegos);
    }

    return(
        <>
            <h3 className="card-title">{genero}</h3>

            <ol className="list-group">
                {
                    infoVideojuegos.map( ({id, nombre}) => {
                        return <li key={id} className="list-group-item">{nombre}</li>
                    })
                }
            </ol>
        </>

        
        )
}