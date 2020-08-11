import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Container1 from './Container1';
import Pag2 from './Pag2';
import Pag3 from './Pag3';
import Pag4 from './Pag4';
import './app.css';

/*
const App = () => {
    return <h1>Hello from React!!</h1>
};
*/

class App extends Component {
    render(){
        return (
            <div id="container">
                <Switch>
                    <Route exact path='/' component={Pag2} />
                    <Route path='/login' component={Container1} />
                    <Route path='/pag3' component={Pag3} />
                    <Route path='/pag4' component={Pag4} /> 
                    {/*si no existen las anteriores redirecciona:*/}
                    {/*
                    <Route component={Error} />
                    */}
                </Switch>
            </div>
        );
    }
}

export default App;