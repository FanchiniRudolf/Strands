import React, {useContext} from 'react';
//Con Link y NavLink vamos a poder navegar entre las diferentes páginas utilizando el Router de React.
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../hooks/userContext';


export const Navbar = () => {
    const {user} = useContext(UserContext);
    console.log(user);
    console.log("user");

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
                        to="/coleccion"
                    >
                        Coleccion
                    </NavLink>
                    <p activeClassName="active" className="nav-item nav-link" >
                        {user}
                    </p>
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/login"
                    >
                        Salir
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}