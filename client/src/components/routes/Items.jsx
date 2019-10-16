import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Items extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: []
        }
    }

    async componentDidMount() {
        try {
            const response = await axios(`http://localhost:3001/api/items`)
            console.log(response.data)
            this.setState({
                items: response.data.items
            })
        } catch (err) {
            console.log(err)
        }
    }

    render () {
        const items = this.state.items.map( item => (
            <li key={item.id}>
                <Link to={`/items/${item.id}`}>{item.title}</Link>
            </li>
        ))
        return (
            <React.Fragment>
                <h4>Items</h4>
                <ul>
                    {items}
                </ul>
            </React.Fragment>
        )
    }
}

export default Items