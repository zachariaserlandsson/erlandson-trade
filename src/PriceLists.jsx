import React from 'react'
import EtText from './EtText.jsx'
import { introduction, priceLists, brochures } from './assets/strings/PriceLists'
import { MaroonHeader, BulletList } from './inventory/info/InfoTexts'
import { RightCircleOutlined } from '@ant-design/icons'

const PriceLists = () => {
  return (
    <div>
      <EtText>{introduction}</EtText>
      <MaroonHeader text={priceLists.header} />
      <BulletList
        bulletPoints={priceLists.listItems.map((listItem) => (
          <div style={{ display: 'flex' }}>
            <EtText style={{ marginTop: 0 }}>{listItem.label}</EtText>
            <RightCircleOutlined
              onClick={() => window.open(listItem.src, '_blank')}
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
        ))}
      />
      <MaroonHeader text={brochures.header} />
      <BulletList
        bulletPoints={brochures.listItems.map((listItem) => (
          <div style={{ display: 'flex' }}>
            <EtText style={{ marginTop: 0 }}>{listItem.label}</EtText>
            <RightCircleOutlined
              onClick={() => window.open(listItem.src, '_blank')}
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
        ))}
      />
    </div>
  )
}

export default PriceLists
