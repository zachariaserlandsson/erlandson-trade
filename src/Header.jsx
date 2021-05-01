import React from 'react'
import { Image, Button } from 'antd'
import { MailOutlined, FireOutlined, TagOutlined, DollarOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'
import EtText from './EtText.jsx'

const Header = () => {
  const history = useHistory()
  const navigateTo = (url) => () => history.replace(url)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1em' }}>
      <div>
        <Image
          preview={false}
          width={500}
          src='http://www.erlandsson-trade.se/images/erlandsontrade.jpg'
          onClick={navigateTo('/')}
          style={{ cursor: 'pointer' }}
        />
        <div
          style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1em', width: 500 }}
        >
          <Button
            type='text'
            icon={<FireOutlined />}
            onClick={navigateTo('/news')}
            style={{ padding: 0 }}
          >
            <EtText>Nyheter</EtText>
          </Button>
          <Button
            type='text'
            icon={<TagOutlined />}
            onClick={navigateTo('/inventory')}
            style={{ padding: 0 }}
          >
            <EtText>Varor</EtText>
          </Button>
          <Button
            type='text'
            icon={<DollarOutlined />}
            onClick={navigateTo('/price-lists')}
            style={{ padding: 0 }}
          >
            <EtText>Prislistor</EtText>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Header
