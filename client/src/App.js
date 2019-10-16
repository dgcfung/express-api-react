import React from 'react'
import { Route } from 'react-router-dom'

import Items from './components/routes/Items'
import Item from './components/routes/Item'
import ItemEdit from './components/routes/ItemEdit'
import ItemCreate from './components/routes/ItemCreate'
import Home from './components/routes/Home'

const App = () => (
  <React.Fragment>
    <Route exact path='/' component={Home} />
    <Route exact path='/items' component={Items} />
    <Route exact path='/create-item' component={ItemCreate} />
    <Route exact path='/items/:id' component={Item} />
    <Route exact path='/items/:id/edit' component={ItemEdit} />
  </React.Fragment>
)

export default App