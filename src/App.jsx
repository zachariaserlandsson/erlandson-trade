import 'antd/dist/antd.css'
import React from 'react'
import Contact from './contact/Contact.jsx'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Menu } from 'antd'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'
const { SubMenu } = Menu

const MenuOption = ({ menuText, linkTo, children, ...rest }) => {
  return children ? (
    <SubMenu key={menuText} icon={<MailOutlined />} title={menuText} {...rest}>
      {children}
    </SubMenu>
  ) : (
    <Menu.Item key={menuText} icon={<MailOutlined />} {...rest}>
      <Link to={linkTo || './'}>{menuText}</Link>
    </Menu.Item>
  )
}

class Sider extends React.Component {
  handleClick = (e) => {
    console.log('click ', e)
  }

  render() {
    return (
      <Menu onClick={this.handleClick} style={{ width: 256 }} mode='inline'>
        <MenuOption menuText='Hem' />
        <MenuOption menuText='Kontakt' linkTo='/contact' />
        <MenuOption menuText='Nyheter' />
        <MenuOption menuText='Annonsvaror' />
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
        <MenuOption menuText='SteamWood' />
        <MenuOption menuText='Plywood' />
        <MenuOption menuText='Fanér' />
        <MenuOption menuText='Trallvirke' />
        <MenuOption menuText='Ek, Ramin, Furu' />
        <MenuOption menuText='Rostfritt' />
        <MenuOption menuText='Bockar &#38; vaggor' />
        <MenuOption menuText='Kuddar &#38; glas' />
        <MenuOption menuText='Kemi' />
        <MenuOption menuText='Prislistor' />
      </Menu>
    )
  }
}

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sider />
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
