import React, {useEffect, useState} from 'react';

//Recibe como argumento el género que se va utilizar para hacer la búsqueda de los videojuegos
// utilizando el API de RAWG
export const InfoVideojuegos = ({genero}) => {

    const [infoVideojuegos, setInfoJuegos] = useState([]);

    useEffect( () => {
        getVideojuegos();
    }, [])

    const getVideojuegos = async() => {
        const url = 'https://api.rawg.io/api/games?key=02798a8eb7994b06a56598fff263a25c&genres=' + genero;
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
            <div className="row row-cols-4">
                {
                    infoVideojuegos.map( ({id, nombre, imagen, rating, metacritic}) => {
                        return <div key={id} className="card">
                                <img src={imagen} className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className="card-title">{nombre}</h5>
                                        <p  className="card-text">Rating: {rating} <br></br> Metacritic: {metacritic}</p>
                                    </div>
                                </div>
                    }
                    )}
        </div>
        </>

        
        )
}