import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Navbar } from '../NavBar';
import { VideojuegosApp2 } from '../Screens/videojuegos/VideojuegosApp';
import { VideojuegosApp } from '../Screens/coleccion/GameCollectionApp';

export const SecondAppRouter = () => {
    return (
        <>
            <Navbar />
            <div>
                <Switch>
                    <Route exact path="/videojuegos" component={VideojuegosApp2} />
                    <Route exact path="/coleccion" component={VideojuegosApp} />
                    <Redirect to="/home" />
                </Switch>
            </div>
        </>
    )
}