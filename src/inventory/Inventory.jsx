import React from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import EtText from '../EtText.jsx'
import CategoryItemsTable from './CategoryItemsTable.jsx'
import jsonInventory from '../products/inventory.json'
import { getPath, getCategoriesFromPath } from '../products/util'
const { SubMenu } = Menu

const MenuOption = ({ menuText, linkTo, children, ...rest }) => {
  return children ? (
    <SubMenu key={menuText} title={menuText} {...rest}>
      {children}
    </SubMenu>
  ) : (
    <Menu.Item key={menuText} {...rest}>
      <Link to={linkTo} replace>
        {menuText}
      </Link>
    </Menu.Item>
  )
}

const _generateMenuOptions = () => {
  return Object.keys(jsonInventory).map((rootCategory) => {
    return (
      <MenuOption menuText={<EtText>{rootCategory}</EtText>}>
        {Object.keys(jsonInventory[rootCategory]).map((subCategory) => {
          return (
            <MenuOption
              linkTo={`/varor/${getPath({ rootCategory, subCategory })}`}
              menuText={<EtText>{subCategory}</EtText>}
            />
          )
        })}
      </MenuOption>
    )
  })
}

const Inventory = ({
  match: {
    params: { rootCategory: rootCategoryPath, subCategory: subCategoryPath },
  },
}) => {
  const { rootCategory, subCategory } = getCategoriesFromPath({ rootCategoryPath, subCategoryPath })
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0.75em 0',
      }}
    >
      <Menu mode='horizontal'>{_generateMenuOptions()}</Menu>
      <CategoryItemsTable rootCategory={rootCategory} subCategory={subCategory} />
    </div>
  )
}

export default Inventory
