import React from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import EtText from '../EtText.jsx'
import CategoryItemsTable from './CategoryItemsTable.jsx'
const { SubMenu } = Menu

const MenuOption = ({ menuText, linkTo, children, ...rest }) => {
  return children ? (
    <SubMenu key={menuText} title={menuText} {...rest}>
      {children}
    </SubMenu>
  ) : (
    <Menu.Item key={menuText} {...rest}>
      <Link to={linkTo || '/inventory'} replace>
        {menuText}
      </Link>
    </Menu.Item>
  )
}

const Inventory = ({
  match: {
    params: { rootCategory, subCategory },
  },
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0.75em 0',
      }}
    >
      <Menu mode='horizontal'>
        <MenuOption menuText={<EtText>Teak</EtText>}>
          <MenuOption menuText={<EtText>Info</EtText>} />
          <MenuOption menuText={<EtText>Underhåll</EtText>} />
          <MenuOption menuText={<EtText>Nåtning av teakdäck</EtText>} />
          <MenuOption linkTo='/varor/teak/teakstock' menuText={<EtText>Teakstock</EtText>} />
          <MenuOption menuText={<EtText>Grabbräcken</EtText>} />
          <MenuOption menuText={<EtText>Flaggstänger</EtText>} />
          <MenuOption menuText={<EtText>Inredning</EtText>} />
          <MenuOption menuText={<EtText>Bordsstativ</EtText>} />
          <MenuOption menuText={<EtText>Lister, hörn &amp; virke</EtText>} />
        </MenuOption>
        <MenuOption menuText={<EtText>Mahogny</EtText>}>
          <MenuOption menuText={<EtText>Info</EtText>} />
          <MenuOption menuText={<EtText>Grabbräcken</EtText>} />
          <MenuOption menuText={<EtText>Flaggstänger</EtText>} />
          <MenuOption menuText={<EtText>Inredning</EtText>} />
          <MenuOption menuText={<EtText>Lister, hörn & virke</EtText>} />
        </MenuOption>
        <MenuOption menuText={<EtText>Steamwood</EtText>}>
          <MenuOption menuText={<EtText>Info</EtText>} />
          <MenuOption menuText={<EtText>Lister & virke</EtText>} />
        </MenuOption>
        <MenuOption menuText={<EtText>Plywood</EtText>}>
          <MenuOption menuText={<EtText>Info</EtText>} />
          <MenuOption menuText={<EtText>Teakplywood</EtText>} />
          <MenuOption menuText={<EtText>Mahognyplywood</EtText>} />
          <MenuOption menuText={<EtText>Övrig plywood</EtText>} />
        </MenuOption>
        <MenuOption menuText={<EtText>Fanér</EtText>}>
          <MenuOption menuText={<EtText>Fanérlimning</EtText>} />
          <MenuOption menuText={<EtText>Fanér</EtText>} />
          <MenuOption menuText={<EtText>Flexifanér</EtText>} />
          <MenuOption menuText={<EtText>Dekorfanér</EtText>} />
        </MenuOption>
        <MenuOption menuText={<EtText>Trallvirke</EtText>}>
          <MenuOption menuText={<EtText>Kirai</EtText>} />
          <MenuOption menuText={<EtText>iDeck</EtText>} />
          <MenuOption menuText={<EtText>Ipé</EtText>} />
          <MenuOption menuText={<EtText>Teak</EtText>} />
          <MenuOption menuText={<EtText>Acacia</EtText>} />
        </MenuOption>
        <MenuOption menuText={<EtText>Ek, ramin & furu</EtText>}>
          <MenuOption menuText={<EtText>Ek</EtText>} />
          <MenuOption menuText={<EtText>Ramin</EtText>} />
          <MenuOption menuText={<EtText>Furu</EtText>} />
        </MenuOption>
        <MenuOption menuText={<EtText>Rostfritt</EtText>}>
          <MenuOption menuText={<EtText>Info</EtText>} />
          <MenuOption menuText={<EtText>Beslag</EtText>} />
          <MenuOption menuText={<EtText>Gångjärn</EtText>} />
          <MenuOption menuText={<EtText>Grabbräcken & hajfenor</EtText>} />
          <MenuOption menuText={<EtText>Plattformar & stegar</EtText>} />
          <MenuOption menuText={<EtText>Pollare</EtText>} />
          <MenuOption menuText={<EtText>Septik- & vattentankar</EtText>} />
          <MenuOption menuText={<EtText>Flaggstänger & mantåg</EtText>} />
          <MenuOption menuText={<EtText>Bojfångare</EtText>} />
        </MenuOption>
        <MenuOption menuText={<EtText>Bockar & vaggor</EtText>}>
          <MenuOption menuText={<EtText>Tyresö</EtText>} />
          <MenuOption menuText={<EtText>Täby</EtText>} />
        </MenuOption>
        <MenuOption menuText={<EtText>Kuddar &#38; glas</EtText>} />
        <MenuOption menuText={<EtText>Kemi</EtText>}>
          <MenuOption menuText={<EtText>International</EtText>} />
          <MenuOption menuText={<EtText>Sika</EtText>} />
          <MenuOption menuText={<EtText>Jotun</EtText>} />
          <MenuOption menuText={<EtText>Lim</EtText>} />
        </MenuOption>
      </Menu>
      <CategoryItemsTable rootCategory={rootCategory} subCategory={subCategory} />
    </div>
  )
}

export default Inventory
