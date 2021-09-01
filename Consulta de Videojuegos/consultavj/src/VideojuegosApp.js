import React, { useState } from 'react';
import { AgregaGenero } from './componentes/AgregaGenero';
import { ResultadoVideojuegos } from './componentes/ResultadoVideojuegos';
import { InfoVideojuegos } from './componentes/InfoVideojuegos';

export const VideojuegosApp = () => {

    const [generos, setGeneros] = useState(['action']);

    // const agregaGenero = () => {
    //     setGeneros( estadoactualGeneros => [...estadoactualGeneros, 'Nuevo Género'] );
    // }

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
            <div className="d-flex p-2 bd-highlight">
                {
                    generos.map( genero => {
                        return <InfoVideojuegos key={genero} genero={genero} />
                  })
                } 
            </div>
        </>
    )
}