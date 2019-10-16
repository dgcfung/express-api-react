import React from 'react'
import { Link } from 'react-router-dom'

const ItemForm = ({ item, handleSubmit, handleChange, cancelPath }) => (
    <form onSubmit={handleSubmit}>
    <input 
        placeholder="Item"
        value={item.title}
        name="title"
        onChange={handleChange}
    />
    <label>Link</label>
    <input 
        placeholder="Your cool item URL"
        value={item.link}
        name="link"
        onChange={handleChange}
    />
    <button type="submit">Submit</button>
    <Link to={cancelPath} >
        <button>Cancel</button>
    </Link>
    </form>
)

export default ItemForm