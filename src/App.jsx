import 'antd/dist/antd.css'
import React from 'react'
import Header from './Header.jsx'
import Inventory from './inventory/Inventory.jsx'
import Home from './Home.jsx'
import PriceLists from './PriceLists.jsx'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import isMobile from 'is-mobile'

function App() {
  return (
    <Router>
      <Header />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: isMobile() ? '0 1.5em' : '0 5em',
        }}
      >
        <Switch>
          <Route path='/artiklar/:rootCategory?/:subCategory?' component={Inventory} />
          <Route path='/prislistor'>
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
