import React from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Dovanos from './Components/Home/Dovanos'

function App() {
    return (
        <div className="container">
            <header className="container">
            <div>
                <Navigation/>
            </div>
            </header>
            <div>
                <Dovanos/>
            </div>
        </div>
    );
}

export default App;
