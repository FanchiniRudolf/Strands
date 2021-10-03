import React, { useState } from 'react';
import { AgregarTitulo } from './AgregarTitulo';
import { InfoVideojuegos } from './InfoVideojuegos';

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
            <div className="container-md text-center align-content-center"/*TODO change map formula*/ >
                {
                    
                    titulos.map( titulo => {
                        return <InfoVideojuegos  titulo={titulo} />
                  })
                } 
            </div>
        </>
    )
}