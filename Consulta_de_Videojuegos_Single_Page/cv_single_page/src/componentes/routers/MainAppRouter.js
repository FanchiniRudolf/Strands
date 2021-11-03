import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { LoginScreen } from '../login/loginScreen';
import { SecondAppRouter } from './SecondAppRouter';
import { getCookie } from "../../Functions/Cookies";
import { UserContext } from '../../hooks/userContext';

export const MainAppRouter = () => {
    const [user, setUser] = useState("");

    return (
        <UserContext.Provider value={{user, setUser}}>
        <Router>
            
                <Switch>
                    <Route exact path="/login" component={LoginScreen} />
                    <Route path="/home" component={SecondAppRouter} />
                    <Route path="/">
                        {getCookie("loggedIn") ?
                            (<SecondAppRouter/>) :
                            (<LoginScreen />)
                        }

                    </Route>
                </Switch>
        </Router>
        </UserContext.Provider>
    )
}