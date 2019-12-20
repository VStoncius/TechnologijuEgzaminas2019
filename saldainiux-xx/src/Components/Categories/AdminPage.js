import React, {Component} from 'react';
import axios from 'axios';

class AdminPage extends Component {
    constructor() {
        super();
        this.state = {letters: {},
        presents: {},
        Present:{},
        Letter:{}
        };
    }
    
    render () {
        if(this.state.letters.data !== undefined & this.state.presents.data !== undefined){
            var comp1 = this.state.letters.data.map(letter => {
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
        });
        
        return (<div>
                <div className='row container'>
                <h1>Dovanos</h1>
                {comp1}
                <br/>
                <h1>Laiskai</h1>
                <br/>
                {comp2}
                </div>
                <form>
                    <div className="form-group">
                        <label>Vardas</label>
                        <input type="text" className="form-control" value={this.state.Letter.name}/>
                    </div>   
                    <div className="form-group">
                        <label>Pavarde</label>
                        <input type="text" className="form-control" value={this.state.Letter.surname}/>
                    </div>       
                    <div className="form-group">
                        <label>Miestas</label>
                        <input type="text" className="form-control" value={this.state.Letter.city}/>
                    </div>  
                    <div className="form-group">
                        <label>Salis</label>
                        <input type="text" className="form-control" value={this.state.Letter.country}/>
                    </div>  
                    <div className="form-group">
                        <label>Adresas</label>
                        <input type="text" className="form-control" value={this.state.Letter.adress}/>
                    </div>
                    <div className="form-group">
                        <label>Laiskas</label>
                        <input type="text" className="form-control" value={this.state.Letter.body}/>
                    </div>
                    <div className="form-group">
                        <label>Dovanos pavadinimas</label>
                        <input type="text" className="form-control" value={this.state.Present.name}/>
                    </div>                    
                    <div className="form-group">
                      <label for="exampleFormControlSelect1">Dovanos tipas</label>
                      <select class="form-control" value={this.state.Present.type}>
                        <option>žaislas</option>
                        <option>įvykis</option>
                        <option>gyvūnas</option>
                      </select>
                    </div>
                    <div className="form-group">
                    <label>Dovanos apibudinimas</label>
                    <input type="text" className="form-control" value={this.state.Present.description}/>
                    </div>
                    <div className="form-group">
                    <label>Dovanos nuotrauka</label>
                    <input type="URL" className="form-control" value={this.state.Present.imageURL}/>
                    </div>
                    <div className="form-group">
                    <label>Ar dovana skirta suaugusiems</label>
                    <select class="form-control" value={this.state.Present.forAdults}>
                        <option>True</option>
                        <option>False</option>
                      </select>
                    </div>
                    <button href="#" className="btn btn-primary" onClick={this.handleCreatePresentClick}>Create Present</button>
                </form>
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

    handleCreatePresentClick = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/presents/create', (this.state.Present), (this.state.Letter));
    }
}
export default AdminPage;
