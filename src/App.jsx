import 'antd/dist/antd.css'
import React from 'react'
import Contact from './contact/Contact.jsx'
import Header from './Header.jsx'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Menu } from 'antd'
const { SubMenu } = Menu

const MenuOption = ({ menuText, linkTo, children, ...rest }) => {
  return children ? (
    <SubMenu key={menuText} title={menuText} {...rest}>
      {children}
    </SubMenu>
  ) : (
    <Menu.Item key={menuText} {...rest}>
      <Link to={linkTo || './'}>{menuText}</Link>
    </Menu.Item>
  )
}

const BottomMenuRow = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Menu mode='horizontal'>
        <MenuOption menuText='Teak'>
          <MenuOption menuText='Info' />
          <MenuOption menuText='Underhåll' />
          <MenuOption menuText='Nåtning av teakdäck' />
          <MenuOption menuText='Teakstock' />
          <MenuOption menuText='Grabbräcken' />
          <MenuOption menuText='Flaggstänger' />
          <MenuOption menuText='Inredning' />
          <MenuOption menuText='Bordsstativ' />
          <MenuOption menuText='Lister, hörn &#38; virke' />
        </MenuOption>
        <MenuOption menuText='Mahogny' />
        <MenuOption menuText='Steamwood' />
        <MenuOption menuText='Plywood' />
        <MenuOption menuText='Fanér' />
        <MenuOption menuText='Trallvirke' />
        <MenuOption menuText='Ek, Ramin, Furu' />
        <MenuOption menuText='Rostfritt' />
        <MenuOption menuText='Bockar &#38; vaggor' />
        <MenuOption menuText='Kuddar &#38; glas' />
        <MenuOption menuText='Kemi' />
      </Menu>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Header />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <BottomMenuRow />
        <Switch>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
