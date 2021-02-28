import 'antd/dist/antd.css'
import React from 'react'
import Contact from './contact/Contact.jsx'
import Header from './Header.jsx'
import Inventory from './Inventory.jsx'
import Home from './Home.jsx'
import News from './News.jsx'
import PriceLists from './PriceLists.jsx'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Switch>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/inventory'>
            <Inventory />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
          <Route path='/news'>
            <News />
          </Route>
          <Route path='/price-lists'>
            <PriceLists />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
