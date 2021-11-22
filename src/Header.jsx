import React from 'react'
import { Image } from 'antd'
import { useHistory } from 'react-router-dom'
import { fetchResourceAtPath } from './util'
import isMobile from 'is-mobile'
import DesktopPageNavigation from './DesktopPageNavigation'
import MobilePageNavigation from './MobilePageNavigation'

const Header = () => {
  const history = useHistory()
  const navigateTo = (url) => () => history.replace(url)
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: isMobile() ? '1em 0 0 0' : '1em',
      }}
    >
      <Image
        preview={false}
        width={isMobile() ? '75%' : 500}
        src={fetchResourceAtPath('/assets/images/erlandsontrade.jpg')}
        onClick={navigateTo('/')}
        style={{ cursor: 'pointer' }}
      />
      {isMobile() ? (
        <MobilePageNavigation navigateTo={navigateTo} />
      ) : (
        <DesktopPageNavigation navigateTo={navigateTo} />
      )}
    </div>
  )
}

export default Header
