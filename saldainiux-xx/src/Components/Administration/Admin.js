import React, {Component} from 'react';
import User from '../User/User';
import RemoveBoardGame from './RemoveBoardGame'
import Navigation from '../Navigation/Navigation';


class Administration extends Component {
    constructor(props) {
        super();
        this.state = {};
    }
    
    render = () => {
        return (
            <div>
                <div className='container'>
                    <header className="container">
                        <div className="row">
                            <User/>
                        </div>
                    </header>
                    <div>
                <Navigation/>
                    </div>
                </div>
                <br></br>
                <div className="container row-12">

                </div>
            </div>
        );
    }
}

export default Administration;
