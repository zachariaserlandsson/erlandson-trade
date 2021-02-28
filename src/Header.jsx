import React from 'react'
import { Image } from 'antd'
import { Button } from 'antd'
import {
  MailOutlined,
  HomeOutlined,
  FireOutlined,
  TagOutlined,
  DollarOutlined,
} from '@ant-design/icons'
import { useHistory } from 'react-router-dom'

const Header = () => {
  const history = useHistory()
  const navigateTo = (url) => () => history.replace(url)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1em' }}>
      {/* <div style={{ borderStyle: 'solid', borderRadius: '15px', padding: '0.5em' }}> */}
      <div>
        <Image
          preview={false}
          width={500}
          src='http://www.erlandsson-trade.se/images/erlandsontrade.jpg'
        />
        <div
          style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1em', width: 500 }}
        >
          <Button type='text' icon={<HomeOutlined />} style={{ padding: 0 }}>
            Hem
          </Button>
          <Button type='text' icon={<MailOutlined />} style={{ padding: 0 }}>
            Kontakt
          </Button>
          <Button
            type='text'
            icon={<FireOutlined />}
            onClick={navigateTo('/')}
            style={{ padding: 0 }}
          >
            Nyheter
          </Button>
          <Button
            type='text'
            icon={<TagOutlined />}
            onClick={navigateTo('/inventory')}
            style={{ padding: 0 }}
          >
            Varor
          </Button>
          <Button type='text' icon={<DollarOutlined />} style={{ padding: 0 }}>
            Prislistor
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Header
