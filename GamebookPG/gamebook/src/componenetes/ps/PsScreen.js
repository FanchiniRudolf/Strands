import React from 'react';
import { GameListScreen } from '../gmaes/GameListScreen';
export const PsScreen = () => {
    return (
        <>
            <h1>Juegos de PlayStation</h1>
            <br />
            <GameListScreen plataforma="PlayStation" />
        </>
    )
}