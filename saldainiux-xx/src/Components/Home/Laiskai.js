import React, {Component} from 'react';
import LetterList from '../Categories/LetterList'

class Dovanos extends Component {
    constructor() {
        super();
        this.state = {

        };
    }
    render () {
        return (<div className='container'>
            <div>
                <LetterList/>
            </div>
        </div>)
    }
}

export default Dovanos;
