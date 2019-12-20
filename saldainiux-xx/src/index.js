import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Switch, Redirect, Route} from 'react-router';
import {BrowserRouter, Link} from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import Laiskai from "./Components/Home/Laiskai"
import Administracija from './Components/Home/Administracija'

var handleClick = () => {

}

var LaiskaiComponent = (props) => {
    return (
        <div className='container'>
            <header className="container">
            <div>
                <Navigation/>
            </div>
            </header>
                <Laiskai/>
            <div className='container row'>
            </div>
        </div>
    );
}
var Admin = (props) => {
    return (
        <div className='container'>
        <header className="container">
        <div>
            <Navigation/>
        </div>
        </header>
        <div>
            <Administracija/>
        </div>
        </div>
    );
}


ReactDOM.render(
    <BrowserRouter>
    <Switch>
        <Route name="Dovanos" exact path='/' component={App} key='Dovanos'/>
        <Route name="Laiskai" path="/laiskai" component={LaiskaiComponent} key='Laiskai'/>
        <Route path="/administration" component={Admin} key='Administracija'/>
    </Switch>
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls. Learn
// more about service workers: https://bit.ly/CRA - PWA
serviceWorker.unregister();
