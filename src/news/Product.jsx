import React from 'react'
import EtText from '../EtText.jsx'
import { Image } from 'antd'

const Product = ({ product: { headline, imageSources }, children }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '1em 0',
        border: '2.5px solid #D0D0FE',
        borderRadius: '10px',
        padding: '0.75em',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', padding: '0 1em' }}>
        <EtText style={{ fontSize: '15px', fontWeight: 'bold' }}>{headline}</EtText>
        {children}
      </div>
      <div style={{ display: 'flex' }}>
        {imageSources &&
          imageSources.map((source) => (
            <Image
              preview={false}
              width={'250px'}
              height={'250px'}
              fallback='http://www.erlandsson-trade.se/images/erlandsontrade.jpg'
              src={source}
            />
          ))}
      </div>
    </div>
  )
}

export const ProductParagraph = ({ paragraph: { text, href } }) => {
  return <EtText>{href ? <a href={href}>{text}</a> : text}</EtText>
}

export default Product
