import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// screens
import Form from './Form/index.jsx';
import Start from './Start/Start';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Start} />
            <Route path="/cadastro" component={Form} />
        </Switch>   
    </BrowserRouter>       
)

export default Routes;