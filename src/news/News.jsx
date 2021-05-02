import React from 'react'
import EtText from '../EtText.jsx'
import { headline } from '../assets/strings/News'
import Product, { ProductParagraph } from './Product.jsx'
import jsonProducts from '../products/news.json'

const News = () => {
  return (
    <div style={{ padding: '1em 0' }}>
      <EtText style={{ fontSize: '22px', fontWeight: 575 }}>
        <i>{headline}</i>
      </EtText>
      {jsonProducts.map(
        (product, index) =>
          console.log(product) || (
            <Product key={index} product={product}>
              {product.subHeader && (
                <EtText>
                  <i>{product.subHeader}</i>
                </EtText>
              )}
              {product.bodyParagraphs.map((paragraph) => (
                <ProductParagraph paragraph={paragraph} />
              ))}
              {product.additionalInfo && (
                <EtText>
                  <a href={product.additionalInfo.href}>{product.additionalInfo.label}</a>
                </EtText>
              )}
            </Product>
          )
      )}
    </div>
  )
}

export default News
