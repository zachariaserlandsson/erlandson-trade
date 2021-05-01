import React from 'react'
import EtText from '../EtText.jsx'
import { Image } from 'antd'

const Product = ({ headline, productImageSource, children }) => {
  return (
    <div style={{ display: 'flex', margin: '1em 0' }}>
      <Image preview={false} width={'350px'} src={productImageSource} />
      <div style={{ display: 'flex', flexDirection: 'column', padding: '0 1em' }}>
        <EtText style={{ fontSize: '15px', fontWeight: 'bold' }}>{headline}</EtText>
        {children}
      </div>
    </div>
  )
}

export default Product
