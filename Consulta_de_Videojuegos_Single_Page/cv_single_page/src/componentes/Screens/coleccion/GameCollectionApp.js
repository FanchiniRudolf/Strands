import React, { useReducer } from 'react';
import { AgregarTitulo } from './GameCollectionAdd';
import { GameCollection } from './GameCollection';
import { collectionReducer, init } from '../../../hooks/collectionReducer';


export const VideojuegosApp = () => {

    const [titulos, dispatch] = useReducer(collectionReducer, [], init);


    return ( 
        <>
            <div className = "jumbotron jumbotron-fluid" >
                <div className = "container" >
                <h1 className = "display-4" > Gamebook </h1> 
                <p className = "lead" > ¡Bienvenido a la página donde podrás consultar información de videojuegos! </p> 
                </div> 
            </div> 

            <AgregarTitulo dispatch = {dispatch} />


            {/*Creamos lista*/}
            <GameCollection titulos={titulos} dispatch={dispatch}/>
            
        </>
    )
}