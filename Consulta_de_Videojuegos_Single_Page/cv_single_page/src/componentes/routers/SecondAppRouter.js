import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Navbar } from '../NavBar';
import { Videojugos } from '../../Screens/videojuegos/Videojuegos';
import { Coleccion } from '../../Screens/coleccion/Coleccion';


export const SecondAppRouter = () => {
    return (
        <>
            <Navbar />
            <div>
                <Switch>
                    <Route exact path="/videojugos" component={Videojugos} />
                    <Route exact path="/coleccion" component={Coleccion} />
                    <Redirect to="/home" />
                </Switch>
            </div>
        </>
    )
}