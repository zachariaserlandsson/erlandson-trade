import React from 'react'
import EtText from '../../EtText.jsx'
import { introduction, advantages, origins, deforestation } from '../../assets/strings/TeakInfo'
import CenteredImage from './CenteredImage.jsx'
import { TextWithMargin, MaroonHeader, BulletList } from './InfoTexts.jsx'

const TeakInfo = () => {
  return (
    <div style={{ marginBottom: '1em' }}>
      <CenteredImage src='http://www.erlandson-trade.se/images/teakleaves.gif' />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <TextWithMargin text={introduction} />
        <MaroonHeader text={advantages.header} />
        <EtText>{advantages.body}</EtText>
        <BulletList bulletPoints={advantages.bulletPoints} />
        <MaroonHeader text={origins.header} />
        <EtText>{origins.body}</EtText>
        <MaroonHeader text={deforestation.header} />
        <EtText>{deforestation.body}</EtText>
      </div>
    </div>
  )
}

export default TeakInfo
