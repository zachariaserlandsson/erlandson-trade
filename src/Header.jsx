import { Image } from 'antd'
import { Menu, Button } from 'antd'
import {
  MailOutlined,
  HomeOutlined,
  FireOutlined,
  TagOutlined,
  DollarOutlined,
} from '@ant-design/icons'

const Header = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1em' }}>
      <Image
        preview={false}
        width={500}
        src='http://www.erlandsson-trade.se/images/erlandsontrade.jpg'
      />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1em' }}>
        <Button type='text' icon={<HomeOutlined />}>
          Hem
        </Button>
        <Button type='text' icon={<MailOutlined />}>
          Kontakt
        </Button>
        <Button type='text' icon={<FireOutlined />}>
          Nyheter
        </Button>
        <Button type='text' icon={<TagOutlined />}>
          Varor
        </Button>
        <Button type='text' icon={<DollarOutlined />}>
          Prislistor
        </Button>
      </div>
    </div>
  )
}

export default Header
