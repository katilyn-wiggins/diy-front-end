import React, {Component} from 'react'
import {makeJewel} from './api-utils';
import Spinner from './Spinner.js';


export default class Create extends Component {
    state = {
        name: '',
        description: '',
        price: 1,
        category_id: 1,
        made_of_silver: false,
        image: 'https://placekitten.com/g/200/200',
        loading: false,
    }

    //handlers
    handleNameChange = (e) => this.setState({name: e.target.value})
    handleDescriptionChange = (e) => this.setState({description: e.target.value})
    handlePriceChange = (e) => this.setState({price: Number(e.target.value)})
    handleCategoryChange = (e) => this.setState({
        category_id: Number(e.target.value),
    })

    handleSilverChange = () => {
        this.setState({
            made_of_silver: !this.state.made_of_silver,

        })
    }

    handleClick = async (e) => {
        e.preventDefault();

        const jewel = await makeJewel(this.state);
        console.log(jewel);
        this.props.history.push('/jewelry');
        console.log('submit was pushed');

    }

    render () {
        console.log(this.state);

        return (
            <div>
                {
                    this.state.loading
                        ? <Spinner />
                        : <form className="form">
                            <label>Name
                    <input value={this.state.name} type="string" onChange={this.handleNameChange}></input>
                            </label>

                            <label>Description
                    <input value={this.state.description} type="string" onChange={this.handleDescriptionChange}></input>
                            </label>

                            <label>Price
                    <input value={this.state.price} type="number" onChange={this.handlePriceChange}></input>
                            </label>

                            <label> Category
                        <select value={this.state.category}>
                                    <option value={1}>Necklace</option>
                                    <option value={3}>Bracelet</option>
                                    <option value={2}>Ring</option>
                                    <option value={4}>Anklet</option>
                                </select>
                            </label>
                            <label>Contains Silver?
                    <input value={this.state.made_of_silver} type="checkbox" onChange={this.handleSilverChange}></input>
                            </label>
                            <button onClick={this.handleClick}>Create Jewelry Item!</button>
                        </form>
                }
            </div>
        )
    }
}