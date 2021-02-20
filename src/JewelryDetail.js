import React, {Component} from 'react'
import request from 'superagent';
import Spinner from './Spinner.js';

export default class Detail extends Component {
    state={
        jewelry: {},
    }
    componentDidMount=async () => {

        this.setState({loading: true});

        const data=await request.get(`https://tranquil-reaches-22835.herokuapp.com/jewelry/${this.props.match.params.id}`);
        console.log(data);
        this.setState({
            loading: false,

            jewelry: data.body[0],

        });

    }

    render() {

        return (
            <div>
                {
                    this.state.loading
                        ? <Spinner />
                        :<div className="jewelry-detail-page">
                            <div className="jewelry-detail-name">{this.state.jewelry.name} </div>

                            <img className="jewelry-detail-img" alt="jewelry" src={this.state.jewelry.image}></img>
                            <div className="jewelry-detail-text-content">
                                <div>description: {this.state.jewelry.description} </div>
                                <div>price: {this.state.jewelry.price} </div>
                                <div>category: {this.state.jewelry.category} </div>
                                <div>contains silver: true {this.state.jewelry.made_of_silver? true:"true"? false:"false"} </div>
                            </div>
                        </div>
                }
            </div>
        )
    }
}