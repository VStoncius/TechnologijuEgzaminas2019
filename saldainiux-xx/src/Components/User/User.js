import React, {Component} from 'react';
import Username from './UserRender'
import LoggedIn from './LoggedIn'
import axios from 'axios';

class User extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    handleNewUser = (event) => {

        }
    
    handleChange = (event) => {

    }

    handleChange2 = (event) => {

    }
    handleLogin = (event) => {

    }
    render = () => {
            return (<div className="container col-2">
			<Username/>
                </div>)
    }
}

export default User;
