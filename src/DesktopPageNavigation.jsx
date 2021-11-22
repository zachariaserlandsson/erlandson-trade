import React from 'react'
import { Button, Popover } from 'antd'
import { TagOutlined, DollarOutlined, MailOutlined } from '@ant-design/icons'
import EtText from './EtText.jsx'
import EmailWithCopy from './EmailWithCopy'
import { mailAdress } from './util'

const DesktopPageNavigation = ({ navigateTo }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1em', width: 500 }}>
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
      <Popover content={<EmailWithCopy />}>
        <Button
          type='text'
          icon={<MailOutlined />}
          onClick={() => (window.location.href = `mailto:${mailAdress}`)}
          style={{ padding: 0 }}
        >
          <EtText>Kontakt</EtText>
        </Button>
      </Popover>
    </div>
  )
}

export default DesktopPageNavigation
