import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'



export default withRouter(class Home extends Component {

    handleChange = (e) => {

        this.props.history.push('/jewelry')
    }

    render() {
        return (
            <div className="home-page">
                <h1 className="title">LORE</h1>

                <button className="enter-button" onClick={this.handleChange}> ENTER
                </button>
            </div>
        )
    }
})
