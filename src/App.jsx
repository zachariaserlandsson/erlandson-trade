import 'antd/dist/antd.css'
import { MailOutlined } from '@ant-design/icons'
import React from 'react'
import Contact from './contact/Contact.jsx'
import Header from './Header.jsx'
import Inventory from './Inventory.jsx'
import Home from './Home.jsx'
import News from './News.jsx'
import PriceLists from './PriceLists.jsx'
import EtText from './EtText.jsx'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <div style={{ display: 'flex', flexDirection: 'column', padding: '0 5em' }}>
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
        <div
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            textAlign: 'center',
            padding: '1em 0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <MailOutlined style={{ marginRight: '0.5em' }} />
          <EtText>
            <i>
              <a href='mailto:info@erlandson-trade.se'>info@erlandson-trade.se</a>
            </i>
          </EtText>
        </div>
      </div>
    </Router>
  )
}

export default App
