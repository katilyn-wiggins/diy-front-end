import React, {Component} from 'react'
import {getJewel, getKinds, updateJewel, deleteJewel} from './api-utils.js';
import Spinner from './Spinner.js';


export default class JewelryDetail extends Component {
    state = {
        name: '',
        description: '',
        price: 1,
        category_id: 1,
        made_of_silver: false,
        categories: [],
        image: 'https://placekitten.com/g/200/200',
        loading: false
    }

    componentDidMount = async () => {
        this.setState({
            loading: true,
        })
        const categories = await getKinds();
        const singleJewel = await getJewel(this.props.match.params.id);
        console.log(singleJewel);

        this.setState({
            name: singleJewel.name,
            description: singleJewel.description,
            price: singleJewel.price,
            category_id: singleJewel.category_id,
            made_of_silver: singleJewel.made_of_silver,
            // category: singleJewel.category,
            categories: categories,
            loading: false,
        })
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
            made_of_silver: !this.state.made_of_silver
        })
    }

    handleClick = async (e) => {
        e.preventDefault();

        // await makeJewel(this.state);

        await updateJewel(this.props.match.params.id, this.state);

        this.props.history.push('/jewelry');
        console.log('update was pushed');
    }

    handleDelete = async (e) => {
        e.preventDefault();

        await deleteJewel(this.props.match.params.id);

        this.props.history.push('/jewelry');
        console.log('delete was pushed');
    }

    render () {
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
                        <select key={this.state.categories.id} value={this.state.category} onChange={this.handleCategoryChange}>
                                    {
                                        this.state.categories
                                            .map(category =>
                                                <option value={category.id} defaultValue={this.state.category_id === category.id}>
                                                    {category.name}
                                                </option>
                                            )
                                    }
                                </select>
                            </label>
                            <label>Contains Silver?
                    <input value={this.state.made_of_silver} type="checkbox" onChange={this.handleSilverChange} checked={this.state.made_of_silver}></input>
                            </label>
                            <button onClick={this.handleClick}>Update Jewelry Item!</button>
                            <button onClick={this.handleDelete}>Delete Jewelry Item!</button>
                        </form>
                }
            </div>
        )
    }
}
