import React from 'react'; 
import { 
    BrowserRouter as Router,  
    Switch,  
    Route,  
    Redirect  
} from "react-router-dom"; 
import { AboutPage } from './AboutPage'; 
import { HomePage } from './HomePage'; 
import { LoginPage } from './LoginPage'; 
import { NavBar } from './NavBar'; 
 
 
export const AppRouter = () => { 
    return ( 
        <Router>             
            <div> 
                {/* Colocamos el nav bar de la aplicación */} 
                <NavBar /> 
 
                <div className="container"> 
                    <Switch> 
                        <Route exact path="/" component={HomePage} /> 
                        <Route exact path="/about" component={AboutPage} /> 
                        <Route exact path="/login" component={LoginPage} /> 
                        <Redirect to="/" /> 
                    </Switch> 
                </div> 
            </div> 
        </Router> 
    ) 
}