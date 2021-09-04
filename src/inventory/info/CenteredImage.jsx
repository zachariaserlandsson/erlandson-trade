import React from 'react'
import { Image } from 'antd'

const CenteredImage = ({ src }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Image
        preview={false}
        fallback='http://www.erlandsson-trade.se/images/erlandsontrade.jpg'
        src={src}
      />
    </div>
  )
}

export default CenteredImage
