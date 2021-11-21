import React from 'react'
import { Image, Button, Popover, message } from 'antd'
import { TagOutlined, DollarOutlined, MailOutlined, CopyOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'
import { fetchResourceAtPath } from './util'
import EtText from './EtText.jsx'
import CopyToClipboard from 'react-copy-to-clipboard'

const Header = () => {
  const history = useHistory()
  const navigateTo = (url) => () => history.replace(url)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1em' }}>
      <div>
        <Image
          preview={false}
          width={500}
          src={fetchResourceAtPath('/assets/images/erlandsontrade.jpg')}
          onClick={navigateTo('/')}
          style={{ cursor: 'pointer' }}
        />
        <div
          style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1em', width: 500 }}
        >
          <Button
            type='text'
            icon={<TagOutlined />}
            onClick={navigateTo('/artiklar')}
            style={{ padding: 0 }}
          >
            <EtText>Artiklar</EtText>
          </Button>
          <Button
            type='text'
            icon={<DollarOutlined />}
            onClick={navigateTo('/prislistor')}
            style={{ padding: 0 }}
          >
            <EtText>Prislistor</EtText>
          </Button>
          <Popover
            content={
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <p style={{ margin: 0 }}>info@erlandson-trade.se</p>
                <CopyToClipboard
                  text='info@erlandson-trade.se'
                  onCopy={() => message.info('Kopierade mail-adressen!')}
                >
                  <Button style={{ marginLeft: '0.5em' }} shape='circle' icon={<CopyOutlined />} />
                </CopyToClipboard>
              </div>
            }
          >
            <Button
              type='text'
              icon={<MailOutlined />}
              onClick={() => (window.location.href = `mailto:info@erlandson-trade.se`)}
              style={{ padding: 0 }}
            >
              <EtText>Kontakt</EtText>
            </Button>
          </Popover>
        </div>
      </div>
    </div>
  )
}

export default Header
