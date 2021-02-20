import React, {Component} from 'react'
import request from 'superagent';
import Spinner from './Spinner.js';

export default class Detail extends Component {
    state={
        jewelry: {},
    }
    componentDidMount=async () => {

        this.setState({loading: true});

        const data=await request.get(`https://tranquil-reaches-22835.herokuapp.com/jewelry=${this.props.match.params.id}`);

        this.setState({
            loading: false,

            jewelry: data.body.results.find(jewel => jewel.id===this.props.match.params.id),

        });

    }

    render() {


        return (
            <div>
                {
                    this.state.loading
                        ? <Spinner />
                        :<div className="jewelry-detail-page">
                            <div className="jewelry-detail-name">{this.state.jewelry.id} </div>

                            <img className="jewelry-detail-img" alt="jewelry" src={this.state.jewlery.image}></img>
                            <div className="jewelry-detail-text-content">
                                <div>name: {this.state.jewelry.name}</div>
                                <div>description: {this.state.jewelry.description} </div>
                                <div>price: {this.state.jewelry.price} </div>
                                <div>category: {this.state.jewelry.category} </div>
                                <div>contains silver: {this.state.jewelry.made_of_silver} </div>
                            </div>
                        </div>
                }
            </div>
        )
    }
}