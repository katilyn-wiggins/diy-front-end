import React, {Component} from 'react';
import {getJewelry} from './api-utils';
import JewelryList from './JewelryList.js';
import Spinner from './Spinner.js'

// import Dropdown from './Dropdown.js';


export default class Search extends Component {
    state = {
        jewelry: [],
        loading: false
    }

    componentDidMount = async () => {
        this.setState({
            loading: true,
        });


        const jewelry = await getJewelry();

        this.setState({
            jewelry: jewelry,
            loading: false
        })
    }

    render () {

        return (
            <div className="body">


                {
                    this.state.loading
                        ? <Spinner />
                        : <JewelryList jewelry={this.state.jewelry} />

                }

            </div>
        );

    }


}
