import React from 'react';
import { useFetch } from '../../../hooks/fetchGameId';
import './Style.css'; 


//Recibe como argumento el género que se va utilizar para hacer la búsqueda de los videojuegos
// utilizando el API de RAWG
export const InfoVideojuegos = ({titulo}) => {


    const url = 'https://api.rawg.io/api/games/' + titulo + '?key=02798a8eb7994b06a56598fff263a25c';

    const { loading, info }  = useFetch(url);
    

    return(
        <>
            
            
                {loading ? (
                        //Si loading es true, mostramos el mensaje 'loading'
                        <div key={titulo} className="alert alert-info text-center">
                            Loading...
                        </div>
                    ) 
                    : 
                    (
                        //loaded  
                        <div key={info.id} className="card p-2 bd-highlight">
                           
                            <img src={info.background_image} className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">{info.name} </h5>
                                    <p  className="card-text"> 
                                        Id:{titulo} <br></br> 
                                        Rating: {info.rating} <br></br> 
                                        Metacritic: {info.metacritic}</p>                                    
                                </div>
                        </div>
                    )
                }
        
        </>

        
        )
}