import React from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import EtText from './EtText.jsx'
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

const Inventory = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Menu mode='horizontal'>
        <MenuOption menuText={<EtText>Teak</EtText>}>
          <MenuOption menuText={<EtText>Info</EtText>} />
          <MenuOption menuText={<EtText>Underhåll</EtText>} />
          <MenuOption menuText={<EtText>Nåtning av teakdäck</EtText>} />
          <MenuOption menuText={<EtText>Teakstock</EtText>} />
          <MenuOption menuText={<EtText>Grabbräcken</EtText>} />
          <MenuOption menuText={<EtText>Flaggstänger</EtText>} />
          <MenuOption menuText={<EtText>Inredning</EtText>} />
          <MenuOption menuText={<EtText>Bordsstativ</EtText>} />
          <MenuOption menuText={<EtText>Lister, hörn &#38; virke</EtText>} />
        </MenuOption>
        <MenuOption menuText={<EtText>Mahogny</EtText>} />
        <MenuOption menuText={<EtText>Steamwood</EtText>} />
        <MenuOption menuText={<EtText>Plywood</EtText>} />
        <MenuOption menuText={<EtText>Fanér</EtText>} />
        <MenuOption menuText={<EtText>Trallvirke</EtText>} />
        <MenuOption menuText={<EtText>Ek, Ramin, Furu</EtText>} />
        <MenuOption menuText={<EtText>Rostfritt</EtText>} />
        <MenuOption menuText={<EtText>Bockar &#38; vaggor</EtText>} />
        <MenuOption menuText={<EtText>Kuddar &#38; glas</EtText>} />
        <MenuOption menuText={<EtText>Kemi</EtText>} />
      </Menu>
    </div>
  )
}

export default Inventory
