import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import ItemForm from '../shared/ItemForm'
import Layout from '../shared/Layout'

class ItemEdit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            item: {
                title: '',
                link: ''
            },
            updated: false
        }
    }

    async componentDidMount() {
        try {
            const response = await axios(`http://localhost:3001/api/items/${this.props.match.params.id}`)
            this.setState({ item: response.data.item })
        } catch (err) {
            console.error(err)
        }
    }

    handleChange = event => {
        const updatedField = { [event.target.name]: event.target.value }
        const editedItem = Object.assign(this.state.item, updatedField)
        this.setState({ item: editedItem})
    }

    handleSubmit = event => {
        event.preventDefault()

        axios({
            url: `http://localhost:3001/api/items/${this.props.match.params.id}`,
            method: 'PUT',
            data: { item: this.state.item }
        })
        .then(() => this.setState({ updated: true }))
        .catch(console.error)
    }

    render() {
        const { item, updated} = this.state
        const { handleChange, handleSubmit } = this

        if(updated) {
            return <Redirect to={`/items/${this.props.match.params.id}`} />
        }

        return (
            <Layout>
                <ItemForm
                    item={item}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    cancelPath={`/items/${this.props.match.params.id}`}
                 />
            </Layout>
        )
    }
}

export default ItemEdit