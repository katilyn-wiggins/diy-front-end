import React, { Component } from 'react'
import request from 'superagent';
import Spinner from './Spinner.js';

export default class Detail extends Component {
    state = {
        jewelry: {},
    }
    componentDidMount = async () => {

        this.setState({ loading: true });

        const data = await request.get(`https://katilyn-fullstack-project.herokuapp.com/jewelry=${this.props.match.params.id}`);

        this.setState({
            loading: false,

            jewelry: data.body.results.find(jewel => jewel.id === this.props.match.params.id),

        });

    }




    render() {


        return (
            <div>
                {
                    this.state.loading
                        ? <Spinner />
                        : <div className="jewelry-detail-page">
                            <div className="jewelry-detail-name">{this.state.jewelry.id} </div>

                            <img className="jewelry-detail-img" alt="jewelry" src={this.state.jewlery.image}></img>
                            <div className="jewelry-detail-text-content">
                                <div>type: {this.state.jewelry.name}</div>
                                <div>attack: {this.state.jewelry.description} </div>
                                <div>defense: {this.state.jewelry.price} </div>
                                <div>ability: {this.state.jewelry.size} </div>
                                <div>speed: {this.state.jewelry.weight} </div>
                                <div>egg group: {this.state.jewelry.stone} </div>
                                <div>hp: {this.state.jewelry.necklace} </div>

                            </div>
                        </div>
                }
            </div>
        )
    }
}