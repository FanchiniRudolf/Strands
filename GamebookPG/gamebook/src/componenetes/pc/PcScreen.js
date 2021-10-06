import React from 'react';

import { GameListScreen } from '../gmaes/GameListScreen';
export const PcScreen = () => {
    return (
        <>
            <h1>Juegos de PC</h1>
            <br />
            <GameListScreen plataforma="PC" />
        </>
    )
}