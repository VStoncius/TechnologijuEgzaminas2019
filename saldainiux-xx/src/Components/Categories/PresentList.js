import React, {Component} from 'react';
import axios from 'axios';

class PresentList extends Component {
    constructor() {
        super();
        this.state = {presents: {}
        };
    }
    render () {
        if(this.state.presents.data !== undefined)
        return this.state.presents.data.map(present => {
            var value = present.id
                return (
                    <div className="card container col" key={present.id}>
                        <div className="card-body">
                            <h5 className="card-title">{present.name}</h5>
                            <p className="card-text">{present.description}</p> 
                            <p className="card-text">This present has to be sent to:  {present.adress} and {present.type}</p>
                            <button href="#" className="btn btn-primary" onClick={this.handleDetailsClick} value={value}>More details</button>
                        </div>
                    </div>
                );
        });
        else{
            return (<div className="card container col" key='empty'></div>);
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/presents/all')
        .then((response) => {
        this.setState({presents: response});
        })
        }

    handleDetailsClick = (event) => {
        event.preventDefault()
        axios.get('http://localhost:8080/presents/')
    }
}
export default PresentList;
