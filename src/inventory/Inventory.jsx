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
          <MenuOption linkTo='/varor/teak/info' menuText={<EtText>Info</EtText>} />
          <MenuOption linkTo='/varor/teak/underhall' menuText={<EtText>Underhåll</EtText>} />
          <MenuOption
            linkTo='/varor/teak/natning-av-teakdack'
            menuText={<EtText>Nåtning av teakdäck</EtText>}
          />
          <MenuOption linkTo='/varor/teak/teakstock' menuText={<EtText>Teakstock</EtText>} />
          <MenuOption linkTo='/varor/teak/grabbracken' menuText={<EtText>Grabbräcken</EtText>} />
          <MenuOption linkTo='/varor/teak/flaggstanger' menuText={<EtText>Flaggstänger</EtText>} />
          <MenuOption linkTo='/varor/teak/inredning' menuText={<EtText>Inredning</EtText>} />
          <MenuOption linkTo='/varor/teak/bordsstativ' menuText={<EtText>Bordsstativ</EtText>} />
          <MenuOption
            linkTo='/varor/teak/lister-horn-och-virke'
            menuText={<EtText>Lister, hörn &amp; virke</EtText>}
          />
        </MenuOption>
        <MenuOption menuText={<EtText>Mahogny</EtText>}>
          <MenuOption linkTo='/varor/mahogny/info' menuText={<EtText>Info</EtText>} />
          <MenuOption linkTo='/varor/mahogny/grabbracken' menuText={<EtText>Grabbräcken</EtText>} />
          <MenuOption
            linkTo='/varor/mahogny/flaggstanger'
            menuText={<EtText>Flaggstänger</EtText>}
          />
          <MenuOption linkTo='/varor/mahogny/inredning' menuText={<EtText>Inredning</EtText>} />
          <MenuOption
            linkTo='/varor/mahogny/lister-horn-och-virke'
            menuText={<EtText>Lister, hörn & virke</EtText>}
          />
        </MenuOption>
        <MenuOption menuText={<EtText>Steamwood</EtText>}>
          <MenuOption linkTo='/varor/steamwood/info' menuText={<EtText>Info</EtText>} />
          <MenuOption
            linkTo='/varor/steamwood/lister-och-virke'
            menuText={<EtText>Lister & virke</EtText>}
          />
        </MenuOption>
        <MenuOption menuText={<EtText>Plywood</EtText>}>
          <MenuOption linkTo='/varor/plywood/info' menuText={<EtText>Info</EtText>} />
          <MenuOption linkTo='/varor/plywood/teak' menuText={<EtText>Teakplywood</EtText>} />
          <MenuOption linkTo='/varor/plywood/mahogny' menuText={<EtText>Mahognyplywood</EtText>} />
          <MenuOption linkTo='/varor/plywood/ovrig' menuText={<EtText>Övrig plywood</EtText>} />
        </MenuOption>
        <MenuOption menuText={<EtText>Fanér</EtText>}>
          <MenuOption linkTo='/varor/faner/fanerlimning' menuText={<EtText>Fanérlimning</EtText>} />
          <MenuOption linkTo='/varor/faner/faner' menuText={<EtText>Fanér</EtText>} />
          <MenuOption linkTo='/varor/faner/flexifaner' menuText={<EtText>Flexifanér</EtText>} />
          <MenuOption linkTo='/varor/faner/dekorfaner' menuText={<EtText>Dekorfanér</EtText>} />
        </MenuOption>
        <MenuOption menuText={<EtText>Trallvirke</EtText>}>
          <MenuOption linkTo='/varor/trallvirke/kirai' menuText={<EtText>Kirai</EtText>} />
          <MenuOption linkTo='/varor/trallvirke/ideck' menuText={<EtText>iDeck</EtText>} />
          <MenuOption linkTo='/varor/trallvirke/ipe' menuText={<EtText>Ipé</EtText>} />
          <MenuOption linkTo='/varor/trallvirke/teak' menuText={<EtText>Teak</EtText>} />
          <MenuOption linkTo='/varor/trallvirke/acacia' menuText={<EtText>Acacia</EtText>} />
        </MenuOption>
        <MenuOption menuText={<EtText>Ek, ramin & furu</EtText>}>
          <MenuOption linkTo='/varor/ek-ramin-och-furu/ek' menuText={<EtText>Ek</EtText>} />
          <MenuOption linkTo='/varor/ek-ramin-och-furu/ramin' menuText={<EtText>Ramin</EtText>} />
          <MenuOption linkTo='/varor/ek-ramin-och-furu/furu' menuText={<EtText>Furu</EtText>} />
        </MenuOption>
        <MenuOption menuText={<EtText>Rostfritt</EtText>}>
          <MenuOption linkTo='/varor/rostfritt/info' menuText={<EtText>Info</EtText>} />
          <MenuOption linkTo='/varor/rostfritt/beslag' menuText={<EtText>Beslag</EtText>} />
          <MenuOption linkTo='/varor/rostfritt/gangjarn' menuText={<EtText>Gångjärn</EtText>} />
          <MenuOption
            linkTo='/varor/rostfritt/grabbracken-och-hajfenor'
            menuText={<EtText>Grabbräcken & hajfenor</EtText>}
          />
          <MenuOption
            linkTo='/varor/rostfritt/plattformar-och-stegar'
            menuText={<EtText>Plattformar & stegar</EtText>}
          />
          <MenuOption linkTo='/varor/rostfritt/pollare' menuText={<EtText>Pollare</EtText>} />
          <MenuOption
            linkTo='/varor/rostfritt/septik-och-vattentankar'
            menuText={<EtText>Septik- & vattentankar</EtText>}
          />
          <MenuOption
            linkTo='/varor/rostfritt/flaggstanger-och-mantag'
            menuText={<EtText>Flaggstänger & mantåg</EtText>}
          />
          <MenuOption linkTo='/varor/rostfritt/bojfangare' menuText={<EtText>Bojfångare</EtText>} />
        </MenuOption>
        <MenuOption menuText={<EtText>Bockar & vaggor</EtText>}>
          <MenuOption linkTo='/varor/bockar-och-vaggor/tyreso' menuText={<EtText>Tyresö</EtText>} />
          <MenuOption linkTo='/varor/bockar-och-vaggor/taby' menuText={<EtText>Täby</EtText>} />
        </MenuOption>
        <MenuOption linkTo='/varor/kuddar-och-glas' menuText={<EtText>Kuddar &#38; glas</EtText>} />
        <MenuOption menuText={<EtText>Kemi</EtText>}>
          <MenuOption
            linkTo='/varor/kemi/international'
            menuText={<EtText>International</EtText>}
          />
          <MenuOption linkTo='/varor/kemi/sika' menuText={<EtText>Sika</EtText>} />
          <MenuOption linkTo='/varor/kemi/jotun' menuText={<EtText>Jotun</EtText>} />
          <MenuOption linkTo='/varor/kemi/lim' menuText={<EtText>Lim</EtText>} />
        </MenuOption>
      </Menu>
      <CategoryItemsTable rootCategory={rootCategory} subCategory={subCategory} />
    </div>
  )
}

export default Inventory
