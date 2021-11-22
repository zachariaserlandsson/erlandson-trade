import EtText from './EtText.jsx'
import { CopyOutlined } from '@ant-design/icons'
import CopyToClipboard from 'react-copy-to-clipboard'
import { Button, message } from 'antd'
import { mailAdress } from './util'

const EmailWithCopy = ({ additionalStyle }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        ...additionalStyle,
      }}
    >
      <EtText style={{ margin: 0 }}>{mailAdress}</EtText>
      <CopyToClipboard text={mailAdress} onCopy={() => message.info('Kopierade mail-adressen!')}>
        <Button style={{ marginLeft: '0.5em' }} shape='circle' icon={<CopyOutlined />} />
      </CopyToClipboard>
    </div>
  )
}

export default EmailWithCopy
