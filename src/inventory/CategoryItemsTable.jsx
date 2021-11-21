import React from 'react'
import jsonInventory from '../products/inventory.json'
import { Table, Image } from 'antd'
import { fetchResourceAtPath } from '../util'

const columns = [
  {
    title: 'Artikelnummer',
    dataIndex: 'articleId',
  },
  {
    dataIndex: 'imagePath',
    render: (_, record) => {
      return (
        <>
          {record.imagePathWithSuffix ? (
            <Image
              preview={false}
              fallback='http://www.erlandsson-trade.se/images/erlandsontrade.jpg'
              src={fetchResourceAtPath(`/assets/images/${record.imagePathWithSuffix}`)}
            />
          ) : null}
        </>
      )
    },
  },
  {
    title: 'Artikel',
    dataIndex: 'headline',
  },
  {
    title: 'Beskrivning',
    dataIndex: 'body',
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
