import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Navbar } from '../NavBar';
import { Videojuegos } from '../Screens/videojuegos/Videojuegos';
import { VideojuegosApp } from '../Screens/coleccion/GameCollectionApp';

export const SecondAppRouter = () => {
    return (
        <>
            <Navbar />
            <div>
                <Switch>
                    <Route exact path="/videojuegos" component={Videojuegos} />
                    <Route exact path="/coleccion" component={VideojuegosApp} />
                    <Redirect to="/home" />
                </Switch>
            </div>
        </>
    )
}