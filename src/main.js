import React from 'react';

import {Switch, Route} from 'react-router-dom';
import Dashboard from './dashboard';
import Home from './home';

export default class Main extends React.Component {
    render() {
        return (
            <section>
                <Switch>
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/home" component={Home} />
                </Switch>
            </section>
        )
    }
}