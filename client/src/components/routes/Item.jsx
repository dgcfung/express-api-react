import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import Layout from '../shared/Layout'

class Item extends Component {
    constructor(props) {
        super(props)

        this.state = {
            item: null,
            deleted: false
        }
    }

    async componentDidMount() {
        try {
            const response = await axios(`http://localhost:3001/api/items/${this.props.match.params.id}`)
            this.setState({
                item: response.data.item
            })
        } catch (err) {
            console.log(err)
        }
    }

    destroy = () => {
        axios({
            url: `http://localhost:3001/api/items/${this.props.match.params.id}`,
            method: 'DELETE'
          })
          .then(() => this.setState({ deleted: true }))
          .catch(console.error)
    }

    render() {

        const { item, deleted } = this.state
        if(!item) {
            return <p>Loading...</p>
        } 

        if(deleted) {
            return <Redirect to={
                { pathname: '/', state: { msg: 'Item successfully deleted!'}}
            } />
        }
        return(
            <Layout>
            <h4>{item.title}</h4>
            <p>Link: {item.link}</p>
            <button onClick={this.destroy}>Delete Item</button>
            <Link to={`/items/${this.props.match.params.id}/edit`}>
              <button>Edit</button>
            </Link>
            <Link to="/items">Back to all items</Link>
          </Layout>
        )
    }
}

export default Item 