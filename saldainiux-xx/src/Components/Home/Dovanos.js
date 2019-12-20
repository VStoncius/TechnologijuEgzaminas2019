import React, {Component} from 'react';
import PresentList from '../Categories/PresentList'

class Dovanos extends Component {
    constructor() {
        super();
        this.state = {

        };
    }
    render () {
        return (<div className='container'>
            <div>
                <PresentList/>
            </div>
        </div>)
    }
}

export default Dovanos;
