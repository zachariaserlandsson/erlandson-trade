import React from 'react'
import EtText from '../../EtText.jsx'
import { introductionParagraphs, advantages, origins } from '../../assets/strings/MahognyInfo'
import CenteredImage from './CenteredImage.jsx'
import { TextWithMargin, MaroonHeader, BulletList } from './InfoTexts.jsx'
import { fetchResourceAtPath } from '../../util'

const MahognyInfo = () => {
  return (
    <div style={{ marginBottom: '1em' }}>
      <CenteredImage src={fetchResourceAtPath('/assets/images/mahogany.JPG')} />
      {introductionParagraphs.map((paragraph, index) => (
        <TextWithMargin key={index} text={paragraph} />
      ))}
      <MaroonHeader text={advantages.header} />
      <EtText>{advantages.body}</EtText>
      <BulletList bulletPoints={advantages.bulletPoints} />
      <MaroonHeader text={origins.header} />
      <EtText>{origins.body}</EtText>
    </div>
  )
}

export default MahognyInfo
