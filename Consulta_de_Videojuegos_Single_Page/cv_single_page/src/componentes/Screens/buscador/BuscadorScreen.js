import React from 'react'; 
import { juegos } from './juegos'; 
import { GameCard } from './GameCard';
 
export const BuscadorScreen = () => { 
 
    const juegosFiltrados = juegos; 
 
    const handleBusqueda = () => { 
         
    } 
 
    return ( 
        <> 
            <h1>Buscador</h1> 
            <br/> 
 
            <div className="row"> 
                <div className="col-5"> 
                    <h4>Mi Búsqueda</h4> 
                    <br /> 
                    <form onSubmit={handleBusqueda}> 
                        <input  
                            type="text" 
                            className="form-control"  
                            name="criterioBusqueda" 
                        /> 
 
                        <button type="submit" 
                                className="btn m-1 btn-block btn-outline-primary"> 
                            Buscar 
                        </button> 
                    </form> 
                </div> 
 
                <div className="col-7"> 
                    <h4>Resultado</h4> 
                    <br /> 
 
                    { 
                        //Recorremos el resultado de la búsqueda de los juegos. 
                        juegosFiltrados.map(juego => ( 
                            <GameCard key={juego.id} 
                                      juego={juego}/> 
                        )) 
                    } 
 
                </div> 
            </div> 
        </> 
    ) 
 
} 