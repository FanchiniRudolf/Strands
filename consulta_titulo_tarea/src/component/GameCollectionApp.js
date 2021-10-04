import React, { useState } from 'react';
import { AgregarTitulo } from './GameCollectionAdd';
import { GameCollection } from './GameCollection';

export const VideojuegosApp = () => {

    const [titulos, setTitulos] = useState([]);


    return ( 
        <>
            <div className = "jumbotron jumbotron-fluid" >
                <div className = "container" >
                <h1 className = "display-4" > Gamebook </h1> 
                <p className = "lead" > ¡Bienvenido a la página donde podrás consultar información de videojuegos! </p> 
                </div> 
            </div> 

            <AgregarTitulo setTitulos = {setTitulos} />


            {/*Creamos lista*/}
            {console.log(titulos)}
            <GameCollection titulos={titulos}/>
            
        </>
    )
}