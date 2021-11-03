import React from 'react';
//Con Link y NavLink vamos a poder navegar entre las diferentes páginas utilizando el Router de React.
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className="navbar-brand"
                to="/"
            >
                ColeccionVideojuegos
            </Link>
            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/videojuegos"
                    >
                        Videojuegos
                    </NavLink>

                    <NavLink 
                        activeClassName="active" 
                        className="nav-item nav-link" 
                        exact 
                        to="/buscar" 
                    > 
                        Buscar 
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/coleccion"
                    >
                        Coleccion
                    </NavLink>
                    
                </div>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/login"
                    >
                        Salir
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}