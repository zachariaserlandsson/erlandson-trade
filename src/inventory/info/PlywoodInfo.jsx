import React from 'react'
import EtText from '../../EtText.jsx'
import {
  introduction,
  teakPlywood,
  mahognyPlywood,
  deckPlywood,
  durkPlywood,
  glue,
  cherryPlywood,
  oakPlywood,
  beechPlywood,
  walnutPlywood,
} from '../../assets/strings/PlywoodInfo'
import { TextWithMargin, MaroonHeader, BulletList } from './InfoTexts.jsx'
import { RightCircleOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'

const PlywoodInfo = () => {
  const history = useHistory()
  const navigateTo = (url) => () => history.replace(url)
  return (
    <div>
      <TextWithMargin text={introduction} />
      <div style={{ display: 'flex' }}>
        <MaroonHeader style={{ marginTop: 0 }} text={teakPlywood.header} />
        <RightCircleOutlined
          onClick={navigateTo('/artiklar/plywood/teakplywood')}
          style={{
            display: 'flex',
            alignContent: 'center',
            marginTop: '0.15em',
            marginLeft: '0.5em',
            fontSize: '18px',
            color: '#3498DB',
          }}
        />
      </div>
      <BulletList bulletPoints={teakPlywood.products} />
      <div style={{ display: 'flex' }}>
        <MaroonHeader style={{ marginTop: 0 }} text={mahognyPlywood.header} />
        <RightCircleOutlined
          onClick={navigateTo('/artiklar/plywood/teakplywood')}
          style={{
            display: 'flex',
            alignContent: 'center',
            marginTop: '0.15em',
            marginLeft: '0.5em',
            fontSize: '18px',
            color: '#3498DB',
          }}
        />
      </div>
      <EtText>{mahognyPlywood.meranti}</EtText>
      <BulletList bulletPoints={mahognyPlywood.merantiProducts} />
      <EtText>{mahognyPlywood.khaya}</EtText>
      <BulletList bulletPoints={mahognyPlywood.khayaProducts} />
      <MaroonHeader text={deckPlywood.header} />
      <BulletList bulletPoints={deckPlywood.products} />
      <EtText>{deckPlywood.additionalInfo}</EtText>
      <MaroonHeader text={durkPlywood.header} />
      <BulletList bulletPoints={durkPlywood.products} />
      <EtText>{durkPlywood.additionalInfo}</EtText>
      <MaroonHeader text={glue.header} />
      <EtText>{glue.body}</EtText>
      <MaroonHeader text={cherryPlywood.header} />
      <BulletList bulletPoints={cherryPlywood.products} />
      <MaroonHeader text={oakPlywood.header} />
      <BulletList bulletPoints={oakPlywood.products} />
      <MaroonHeader text={beechPlywood.header} />
      <BulletList bulletPoints={beechPlywood.products} />
      <MaroonHeader text={walnutPlywood.header} />
      <BulletList bulletPoints={walnutPlywood.products} />
    </div>
  )
}

export default PlywoodInfo
