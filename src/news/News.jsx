import React from 'react'
import EtText from '../EtText.jsx'
import { Image } from 'antd'
import { headline, bodyParagraphs } from '../assets/strings/News'
import Product from './Product.jsx'
import { products } from './static/products'

const News = () => {
  return (
    <div style={{ padding: '1em 0' }}>
      <EtText style={{ fontSize: '22px', fontWeight: 575 }}>
        <i>{headline}</i>
      </EtText>
      {products.map((product) => (
        <Product headline={product.headline} productImageSource={product.imageSource}>
          {product.subHeader && (
            <EtText>
              <i>{product.subHeader}</i>
            </EtText>
          )}
          {product.paragraphs.map((paragraph) => (
            <EtText>{paragraph}</EtText>
          ))}
          {product.additionalInfo && (
            <EtText>
              <a href={product.additionalInfo.href}>{product.additionalInfo.label}</a>
            </EtText>
          )}
        </Product>
      ))}
    </div>
  )
}

export default News
