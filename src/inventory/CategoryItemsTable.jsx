import React from 'react'
import jsonInventoryBeta from '../products/inventory.json'
import { Table, Image } from 'antd'
import CategoryBreadcrumb from './CategoryBreadcrumb.jsx'

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

const CategoryItemsTable = ({ rootCategory, subCategory }) => {
  const products = jsonInventoryBeta[rootCategory][subCategory]
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
