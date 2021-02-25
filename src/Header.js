import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

export default class Header extends Component {
    render () {
        return (
            <div>
                <NavLink activeClassName="active" to="/">Home</NavLink>
                <NavLink activeClassName="active" to="/jewelry">All Items</NavLink>
                <NavLink activeClassName="active" to="/create">Create</NavLink>
            </div>
        )
    }
}
