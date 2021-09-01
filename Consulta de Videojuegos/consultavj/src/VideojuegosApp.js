import React, { useState } from 'react';
import { AgregaGenero } from './componentes/AgregaGenero';
import { ResultadoVideojuegos } from './componentes/ResultadoVideojuegos';

export const VideojuegosApp = () => {

    const [generos, setGeneros] = useState(['puzzle']);

    const agregaGenero = () => {
        setGeneros( estadoactualGeneros => [...estadoactualGeneros, 'Nuevo Género'] );
    }

    const getVideojuegos = async() => {
        const url = 'https://api.rawg.io/api/genres?key=72dc04c6fa1e43a7acbc6c626c2c2190&genres=puzzle'
        const respuesta = await fetch(url);
        const {results} = await respuesta.json();
        console.log(results);

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

    }

    getVideojuegos();

    return ( 
        <>
            <div className = "jumbotron jumbotron-fluid" >
                <div className = "container" >
                <h1 className = "display-4" > Gamebook </h1> 
                <p className = "lead" > ¡Bienvenido a la página donde podrás consultar información de videojuegos! </p> 
                </div> 
            </div> 

            <AgregaGenero setGeneros = {setGeneros} />

            {/* <button type="button" className="btn btn-primary" onClick={agregaGenero}>Agregar Género</button> */}

            {/*Creamos lista*/}
            <ol className="list-group list-group-numbered">
                {
                    generos.map( genero => {
                        return <ResultadoVideojuegos key={genero} genero={genero} />
                  })
                } 
            </ol>
        </>
    )
}