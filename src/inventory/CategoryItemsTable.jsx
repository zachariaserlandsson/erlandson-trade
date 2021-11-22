import React from 'react'
import jsonInventory from '../products/inventory.json'
import { Table, Image } from 'antd'
import { fetchResourceAtPath } from '../util'
import isMobile from 'is-mobile'
import MobileCardList from './MobileCardList'

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

const _getInventoryItems = ({ rootCategory, subCategory }) =>
  rootCategory && subCategory
    ? jsonInventory[rootCategory][subCategory]
    : rootCategory
    ? Object.values(jsonInventory[rootCategory]).reduce(
        (currentItems, subCategoryItems) => currentItems.concat(subCategoryItems),
        []
      )
    : _getAllInventoryItems()

const CategoryItemsTable = ({ rootCategory, subCategory }) => {
  const products = _getInventoryItems({ rootCategory, subCategory })
  return (
    <div
      style={{
        width: '90%',
        paddingBottom: '2em',
      }}
    >
      {products && products.length ? (
        isMobile() ? (
          <MobileCardList products={products} />
        ) : (
          <Table
            pagination={false}
            bordered
            columns={columns}
            dataSource={products}
            style={{ marginTop: '1em' }}
          />
        )
      ) : null}
    </div>
  )
}

export default CategoryItemsTable
