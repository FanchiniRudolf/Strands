import React from 'react';
import { InfoVideojuegos } from './GameCollectionItem';


export const GameCollection = ({titulos}) => {

    return (
        <div className="d-flex container-md text-center flex-row3 bd-highlight align-items-center mb-3" >
                {
                    
                    titulos.map( titulo => {
                        return <InfoVideojuegos  titulo={titulo} />
                })
                } 
        </div>
    )


}
