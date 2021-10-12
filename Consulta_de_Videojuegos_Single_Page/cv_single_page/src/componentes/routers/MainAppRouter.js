import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { LoginScreen } from '../login/loginScreen';
import { SecondAppRouter } from './SecondAppRouter';

export const MainAppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={LoginScreen} />
                    <Route path="/home" component={SecondAppRouter} />
                    <Route path="/" component={LoginScreen} />
                </Switch>
            </div>
        </Router>
    )
}