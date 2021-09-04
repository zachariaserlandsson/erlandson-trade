import React from 'react'
import jsonInventory from '../products/inventory.json'
import { Table, Image } from 'antd'

const columns = [
  {
    dataIndex: 'imagePath',
    render: (_, record) => {
      return (
        <>
          {record.imagePath ? (
            <Image
              preview={false}
              width={'250px'}
              height={'250px'}
              fallback='http://www.erlandsson-trade.se/images/erlandsontrade.jpg'
              src={`http://www.erlandsson-trade.se/images/${record.imagePath}.jpg`}
            />
          ) : null}
        </>
      )
    },
  },
  {
    title: 'Produktnamn',
    dataIndex: 'headline',
  },
  {
    title: 'Artikelnummer',
    dataIndex: 'articleId',
  },
]

const _getAllInventoryItems = () =>
  Object.values(jsonInventory).reduce(
    (currentItems, rootCategoryObject) => [
      ...currentItems,
      ...Object.values(rootCategoryObject).reduce(
        (rootCategoryItems, subCategoryItems) => [...rootCategoryItems, ...subCategoryItems],
        []
      ),
    ],
    []
  )

const CategoryItemsTable = ({ rootCategory, subCategory }) => {
  const products =
    rootCategory && subCategory ? jsonInventory[rootCategory][subCategory] : _getAllInventoryItems()
  return (
    <div
      style={{
        width: '90%',
        paddingBottom: '2em',
      }}
    >
      {products && products.length ? (
        <Table
          pagination={false}
          bordered
          columns={columns}
          dataSource={products}
          style={{ marginTop: '1em' }}
        />
      ) : null}
    </div>
  )
}

export default CategoryItemsTable
