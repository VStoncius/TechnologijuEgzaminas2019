import React, {Component} from 'react';
import AdminPage from '../Categories/AdminPage'

class Dovanos extends Component {
    constructor() {
        super();
        this.state = {

        };
    }
    render () {
        return (<div className='container'>
            <div>
                <AdminPage/>
            </div>
        </div>)
    }
}

export default Dovanos;
