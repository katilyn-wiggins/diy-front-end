import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class JewleryItem extends Component {


    render () {
        return (
            <Link to={`/jewelry/${this.props.jewelry.id}`}>
                <div className="jewelry-item">
                    <img className="jewelry-image" alt="jewelry" src={this.props.jewelry.image}></img>
                    <div className="jewelry-text">
                        <div>name: {this.props.jewelry.name} </div>
                        {/* <div>description: {this.props.jewelry.description}</div> */}
                        <div>price: {this.props.jewelry.price} </div>
                        <div>category: {this.props.jewelry.category}</div>
                    </div>
                </div>
            </Link>
        )
    }
}
