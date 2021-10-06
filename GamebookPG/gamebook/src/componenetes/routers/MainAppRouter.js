import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { LoginScreen } from '../login/LoginScreen';
import { GamesRouter } from './GamesRouter';
export const MainAppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={LoginScreen} />
                    <Route path="/" component={GamesRouter} />
                </Switch>
            </div>
        </Router>
    )
}