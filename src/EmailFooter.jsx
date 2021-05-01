import { MailOutlined } from '@ant-design/icons'
import EtText from './EtText.jsx'

const EmailFooter = () => (
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
)

export default EmailFooter
