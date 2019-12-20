import React, {Component} from 'react';
import axios from 'axios';

class AdminPage extends Component {
    constructor() {
        super();
        this.state = {letters: {},
        presents: {}
        };
    }
    render () {
        if(this.state.letters.data !== undefined & this.state.presents.data !== undefined){var comp1 = this.state.letters.data.map(letter => {
                return (
                <div className="container">
                    <div className="card col" key={letter.id}>
                    <div className="card-body">
                        <h5 className="card-title">{letter.name} {letter.surname}</h5>
                                 <p>{letter.body}</p>
                        <p className="card-text">This letter came from:{letter.adress}, {letter.city}, {letter.country}</p>
                        <button href="#" className="btn btn-primary" onClick={this.handleDeleteLetterClick.bind(this)} value={letter.id}>Delete</button>
                    </div>
                </div>
                </div>
                    
                );
        });
        var comp2 = this.state.presents.data.map(present => {
                return (
                    <div className="container">
                    <div className="card col" key={present.id}>
                        <div className="card-body">
                            <h5 className="card-title">{present.name}</h5>
                            <p className="card-text">{present.description}</p> 
                            <p className="card-text">This present has to be sent to: {present.adress} and {present.type}</p>
                            <button href="#" className="btn btn-primary" onClick={this.handleDeletePresentClick.bind(this)} value={present.id}>Delete</button>
                        </div>
                    </div>
                    </div>
                );
        })
        var form1 = {}

        var form2 = {}

        return (<div className='row container'>
                <h1>Dovanos</h1>
                {comp1}
                <br/>
                <h1>Laiskai</h1>
                <br/>
                {comp2}
                </div>)}
                else
                return (<div>
                    </div>);
    }
    

    componentDidMount() {
        axios.get('http://localhost:8080/letters/all')
        .then((response) => {
        this.setState({letters: response});
        });
        axios.get('http://localhost:8080/presents/all')
        .then((response) => {
        this.setState({presents: response});
        })
        }

    handleDeleteLetterClick = (event) => {
        event.preventDefault()
        axios.delete('http://localhost:8080/letters/delete/', this.letter)
    }

    handleDeletePresentClick = (event) => {
        event.preventDefault()
        axios.delete('http://localhost:8080/presents/delete/', this.present)
    }
}
export default AdminPage;
