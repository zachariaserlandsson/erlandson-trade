import React from 'react'
import EtText from './EtText.jsx'
import { Image } from 'antd'
import { headline, bodyParagraphs } from './assets/strings/Home'
import { fetchResourceAtPath } from './util'
import isMobile from 'is-mobile'
import EmailWithCopy from './EmailWithCopy'

const Home = () => {
  return (
    <div style={{ padding: isMobile() ? '0.5em 0' : '1em 0' }}>
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
          width={isMobile() ? '90%' : '45%'}
          src={fetchResourceAtPath('/assets/images/shelf.JPG')}
        />
      </div>
      {isMobile() && (
        <EmailWithCopy
          additionalStyle={{
            justifyContent: 'center',
            border: '2px solid #005b8f',
            borderRadius: '5px',
            padding: '0.25em 0',
            marginTop: '1em',
          }}
        />
      )}
    </div>
  )
}

export default Home
