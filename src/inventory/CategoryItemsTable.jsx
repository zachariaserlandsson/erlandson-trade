import React from 'react'
import jsonInventory from '../products/inventory.json'
import { Table, Image } from 'antd'
import CategoryBreadcrumb from './CategoryBreadcrumb.jsx'

const _fetchNestedProducts = (object) =>
  Object.values(object).reduce(
    (allProducts, value) =>
      value.length ? allProducts.concat(value) : allProducts.concat(_fetchNestedProducts(value)),
    []
  )

const columns = [
  {
    dataIndex: 'productImages',
    render: (_, record) => {
      return (
        <>
          {record.imageSources.length
            ? record.imageSources.map((imageSource) => {
                return (
                  <Image
                    preview={false}
                    width={'250px'}
                    height={'250px'}
                    fallback='http://www.erlandsson-trade.se/images/erlandsontrade.jpg'
                    src={imageSource}
                  />
                )
              })
            : null}
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

const CategoryItemsTable = ({ rootCategory, subCategory }) => {
  const products = subCategory ? jsonInventory[subCategory] : _fetchNestedProducts(jsonInventory)
  return (
    <div
      style={{
        width: '90%',
        paddingBottom: '2em',
      }}
    >
      <CategoryBreadcrumb rootCategory={rootCategory} subCategory={subCategory} />
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
