import React, {useEffect, useState} from 'react';
import { useFetch } from '../../../../hooks/fetchGameId';

//Recibe como argumento el género que se va utilizar para hacer la búsqueda de los videojuegos
// utilizando el API de RAWG
export const InfoVideojuegos = ({genero}) => {


    const url = 'https://api.rawg.io/api/games?key=02798a8eb7994b06a56598fff263a25c&genres=' + genero;

    const { loading, info }  = useFetch(url);
    console.log(info);



    return(
        <>
            <h3 className="card-title">{genero}</h3>
            <div className="row row-cols-4">
                {loading ? (
                        //Si loading es true, mostramos el mensaje 'loading'
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    ) 
                    : 
                    (
                        //loaded
                        info.results.map( ({id, name, background_image, rating, metacritic}) => {
                            return <div key={id} className="card">
                                    <img src={background_image} className="card-img-top" alt="..."></img>
                                        <div className="card-body">
                                            <h5 className="card-title">{name}</h5>
                                            <p  className="card-text">Rating: {rating} <br></br> Metacritic: {metacritic}</p>
                                        </div>
                                    </div>
                        }
                        )
                    )
                }
        </div>
        </>

        
        )
}