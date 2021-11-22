import { Image, Card } from 'antd'
import { fetchResourceAtPath } from '../util'
import EtText from '../EtText'

const MobileCardList = ({ products }) => {
  return products.map((product, index) => (
    <Card
      key={index}
      style={{ marginTop: '1em' }}
      bodyStyle={{ padding: '0.5em 1em' }}
      bordered
      cover={
        product.imagePathWithSuffix && (
          <Image
            preview={false}
            fallback='http://www.erlandsson-trade.se/images/erlandsontrade.jpg'
            src={fetchResourceAtPath(`/assets/images/${product.imagePathWithSuffix}`)}
          />
        )
      }
    >
      <EtText style={{ fontWeight: 675 }}>{product.headline}</EtText>
      <EtText>Artikelnummer: {product.articleId}</EtText>
      {product.body && <EtText style={{ marginTop: '1em' }}>{product.body}</EtText>}
    </Card>
  ))
}

export default MobileCardList
