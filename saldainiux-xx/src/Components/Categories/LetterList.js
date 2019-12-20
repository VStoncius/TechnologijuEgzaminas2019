import React, {Component} from 'react';
import axios from 'axios';

class LetterList extends Component {
    constructor() {
        super();
        this.state = {letters: {}
        };
    }
    render () {
        if(this.state.letters.data !== undefined)
        return this.state.letters.data.map(letter => {
            var value = letter.id
                return (
                    <div className="card container col" key={letter.id}>
                        <div className="card-body">
                            <h5 className="card-title">{letter.name} {letter.surname}</h5>
                                     <p>{letter.body}</p>
                            <p className="card-text">This letter came from:{letter.adress}, {letter.city}, {letter.country}</p>
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
        axios.get('http://localhost:8080/letters/all')
        .then((response) => {
        this.setState({letters: response});
        })
        }

    handleDetailsClick = (event) => {
        event.preventDefault()
        console.log(event.currentTarget.value)
    }
}
export default LetterList;
