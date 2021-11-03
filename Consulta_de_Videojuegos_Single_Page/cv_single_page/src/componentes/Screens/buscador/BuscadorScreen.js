import React, { cloneElement } from 'react'; 
import { getCookie } from '../../../Functions/Cookies';
import {useState, useReducer} from 'react';
import { GameCollection } from '../coleccion/GameCollection';
import { collectionReducer, init } from '../../../hooks/collectionReducer';
 
export const BuscadorScreen = () => { 
    
    const [search, setSearch] = useState();
    const [games, setGames] = useState();
    
    const handleBusqueda = (e) => { 
        setSearch(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('Se hizo submit...');

        let temp = getCookie('videogames') || [];
        console.log(temp);
        
        temp = temp.filter((value) => {
              return value === parseInt(search);
        })

        console.log(temp);
        
        setGames(temp);
        console.log(games);
    }

    
    return ( 
        <> 
            <h1>Buscador</h1> 
            <br/> 
 
            <div className="row"> 
                <div className="col-5"> 
                    <h4>Mi Búsqueda</h4> 
                    <br /> 
                    <input 
                        type="text" 
                        className="form-control"  
                        name="criterioBusqueda"
                        onChange={ handleBusqueda }
                    /> 
 
                    <button 
                        type="submit" 
                        className="btn m-1 btn-block btn-outline-primary"
                        onClick = { handleSubmit } >    
                        Buscar
                    </button>  
                </div> 
 
                <div className="col-7"> 
                    <h4>Resultado</h4> 
                    <br /> 
                    
                    {/*Creamos lista*/}
                    <p> {games} </p>
 
                </div> 
            </div> 
        </> 
    ) 
 
} 