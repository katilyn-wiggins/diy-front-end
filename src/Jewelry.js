import React, {Component} from 'react'
import JewelryList from './JewelryList.js';
import request from 'superagent';
import Spinner from './Spinner.js'

// import Dropdown from './Dropdown.js';


export default class Search extends Component {
    state={
        jewelry: [],
        loading: false,
    }

    componentDidMount=async () => {
        await this.getJewelry();
    }


    getJewelry=async () => {

        this.setState({loading: true});

        const data=await request.get(`https://tranquil-reaches-22835.herokuapp.com/jewelry`)
        this.setState({
            loading: false,
            jewelry: data.body,
        });
    }



    render() {

        return (
            <div className="body">


                {
                    this.state.loading
                        ? <Spinner />
                        :<JewelryList jewelry={this.state.jewelry} />

                }

            </div>
        );

    }


}