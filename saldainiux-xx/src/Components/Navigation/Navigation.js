import React from 'react';
import {Switch, Redirect, Route} from 'react-router';
import {BrowserRouter, Link} from 'react-router-dom';

var Navigation = (props) => {
    return (
        <div className="container col-12">
            <div>
                <Link to='/'>Dovanos</Link>
                |&nbsp;
                <Link to='/laiskai'>Laiskai</Link>
                |&nbsp;
                <Link to='/administration'>Administracija</Link>
            </div>
            {props.children}
        </div>
    );
    
}

export default Navigation;
