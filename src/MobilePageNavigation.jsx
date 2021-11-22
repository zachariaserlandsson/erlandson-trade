import React, { useState } from 'react'
import { Menu, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import EtText from './EtText.jsx'

const MobileMenu = ({ navigateTo, closeMenu }) => {
  return (
    <Menu style={{ border: '0.5px solid gray', borderRadius: '5px' }}>
      <Menu.Item
        key='0'
        onClick={() => {
          closeMenu()
          navigateTo('/')()
        }}
      >
        <EtText>Hem</EtText>
      </Menu.Item>
      <Menu.Item
        key='1'
        onClick={() => {
          closeMenu()
          navigateTo('/artiklar')()
        }}
      >
        <EtText>Artiklar</EtText>
      </Menu.Item>
      <Menu.Item
        key='2'
        onClick={() => {
          closeMenu()
          navigateTo('/prislistor')()
        }}
      >
        <EtText>Pristlistor</EtText>
      </Menu.Item>
    </Menu>
  )
}

const _toCapitalCase = (s) => s && s.charAt(0).toUpperCase() + s.substring(1)

const MobilePageNavigation = ({ navigateTo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const mobileMenuLabelText = _toCapitalCase(window.location.href.split('/')[3]) || 'Hem'
  return (
    <Dropdown
      visible={mobileMenuOpen}
      onVisibleChange={() => setMobileMenuOpen(!mobileMenuOpen)}
      overlay={<MobileMenu navigateTo={navigateTo} closeMenu={() => setMobileMenuOpen(false)} />}
      trigger={['click']}
    >
      <EtText style={{ marginTop: '0.5em' }}>
        {mobileMenuLabelText} <DownOutlined />
      </EtText>
    </Dropdown>
  )
}

export default MobilePageNavigation
