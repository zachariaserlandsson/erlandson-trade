import 'antd/dist/antd.css'
import React from 'react'
import Header from './Header.jsx'
import Inventory from './inventory/Inventory.jsx'
import Home from './Home.jsx'
import News from './news/News.jsx'
import PriceLists from './PriceLists.jsx'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <div style={{ display: 'flex', flexDirection: 'column', padding: '0 5em' }}>
        <Switch>
          <Route path='/inventory/:rootCategory?/:subCategory?' component={Inventory} />
          <Route path='/news'>
            <News />
          </Route>
          <Route path='/price-lists'>
            <PriceLists />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
