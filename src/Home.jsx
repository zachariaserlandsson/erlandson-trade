import React from 'react'
import EtText from './EtText.jsx'
import { Image } from 'antd'
import { headline, bodyParagraphs } from './assets/strings/Home'

const Home = () => {
  return (
    <div style={{ padding: '1em 0' }}>
      <EtText style={{ fontSize: '22px', fontWeight: 575 }}>
        <i>{headline}</i>
      </EtText>
      {bodyParagraphs.map((paragraph, index) => (
        <EtText key={index} style={{ margin: '1em 0' }}>
          {paragraph}
        </EtText>
      ))}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2em' }}>
        <Image
          preview={false}
          width={'35%'}
          src='http://www.erlandsson-trade.se/images/shelf.JPG'
        />
      </div>
    </div>
  )
}

export default Home
