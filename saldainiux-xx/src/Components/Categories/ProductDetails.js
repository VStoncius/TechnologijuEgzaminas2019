import React, {Component} from 'react';
import axios from 'axios';

class ProductDetails extends Component {
    constructor() {
        super();
        this.state = {data: {}
        };
    }
    render () {
        if(this.state.data !== undefined)
                return (
                    <div className="card container col">
                        <div className="card-body">
                            <h5 className="card-title">{this.state.title}</h5>
                            <p className="card-text">This phone will cost you: {this.state.price}.</p>
                            <button href="#" className="btn btn-primary">Add to cart</button>
                        </div>
                    </div>
                );
        }
    

    componentDidMount() {
        axios.get('/your/url/{id}')
        .then((response) => {
        this.setState({products: response});
        })
        }
}
        


export default ProductDetails;
