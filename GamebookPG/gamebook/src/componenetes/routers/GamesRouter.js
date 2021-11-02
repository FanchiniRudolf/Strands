import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Navbar } from '../comunes/Navbar';
import { GameScreen } from '../gmaes/GameScreen';
import { PcScreen } from '../pc/PcScreen';
import { PsScreen } from '../ps/PsScreen';
import { SwitchScreen } from '../switch/SwitchScreen';
import { XboxScreen } from '../../xbox/XboxScreen';
import { BuscadorScreen } from '../buscador/BuscadorScreen';

export const GamesRouter = () => {
    return (
        <>
            <Navbar />
            <div>
                <Switch>
                    <Route exact path="/ps" component={PsScreen} />
                    <Route exact path="/xbox" component={XboxScreen} />
                    <Route exact path="/switch" component={SwitchScreen} />
                    <Route exact path="/pc" component={PcScreen} />
                    <Route exact path="/game/:gameId" component={GameScreen} />
                    <Route exact path="/buscar" component={BuscadorScreen} />
                    <Redirect to="/ps" />
                </Switch>
            </div>
        </>
    )
}