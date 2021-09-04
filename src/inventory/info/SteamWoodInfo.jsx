import React from 'react'
import EtText from '../../EtText.jsx'
import {
  introduction,
  advantages,
  production,
  processing,
  treatment,
  products,
  usageAreas,
} from '../../assets/strings/SteamWoodInfo'
import CenteredImage from './CenteredImage.jsx'
import { TextWithMargin, MaroonHeader } from './InfoTexts.jsx'
import { RightCircleOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'

const SteamWoodInfo = () => {
  const history = useHistory()
  const navigateTo = (url) => () => history.replace(url)
  return (
    <div>
      <CenteredImage src='http://www.erlandson-trade.se/images/Askeladden1.jpg' />
      <TextWithMargin text={introduction} />
      <MaroonHeader text={advantages.header} />
      <EtText>{advantages.body}</EtText>
      <MaroonHeader text={production.header} />
      {production.paragraphs.map((paragraph, index) => (
        <EtText style={{ marginTop: index === 0 ? 0 : '0.5em' }} key={index}>
          {paragraph}
        </EtText>
      ))}
      <MaroonHeader text={processing.header} />
      <EtText>{processing.body}</EtText>
      <MaroonHeader text={treatment.header} />
      <EtText>{treatment.body}</EtText>
      <MaroonHeader text={products.header} />
      <div style={{ display: 'flex' }}>
        <EtText>{products.body}</EtText>
        <RightCircleOutlined
          onClick={navigateTo('/varor/steamwood/lister-virke')}
          style={{ marginLeft: '0.5em', fontSize: '18px', color: '#3498DB' }}
        />
      </div>
      <MaroonHeader text={usageAreas.header} />
      <EtText>{usageAreas.body}</EtText>
      <div style={{ marginTop: '1em' }}>
        {usageAreas.examples.map((example, index) => (
          <div key={index} style={{ marginBottom: '1em' }}>
            <CenteredImage src={example.src} />
            <EtText style={{ textAlign: 'center' }}>
              <i>{example.title}</i>
            </EtText>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SteamWoodInfo
