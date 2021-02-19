import React, { Component } from 'react'
import JewelryItem from './JewelryItem.js';


export default class JewelryList extends Component {

    render() {



        const JewelryListLayout =
            this.props.jewelry.map(

                singleJewelryObject =>

                    <JewelryItem key={singleJewelryObject.id} jewelry={
                        singleJewelryObject}
                    />)





        return (
            <ul className="jewelry-list">
                {JewelryListLayout}
            </ul>
        )
    }
}
