const fs = require('fs')

const _tabSplitRow = (row) => row.split('\t').map((value) => value.trim())

const _generateProductObject = (row) => {
  const productData = {
    rootCategory: row[0],
    subCategory: row[1],
    articleId: row[2],
    imagePath: row[3],
    headline: row[4],
    body: row[5],
  }
  return productData.rootCategory && productData.subCategory ? productData : null
}

const generateProductJsonFromTsv = (tsvPath) => {
  const sheetRows = fs.readFileSync(tsvPath).toString().split('\n').map(_tabSplitRow)
  const nonTableHeadRows = sheetRows.slice(1)
  const productObjects = nonTableHeadRows.map(_generateProductObject).filter(Boolean)
  const structuredProducts = productObjects.reduce((currentObject, product) => {
    return {
      ...currentObject,
      [product.rootCategory]: {
        [product.subCategory]: [
          ...((currentObject[product.rootCategory] &&
            currentObject[product.rootCategory][product.subCategory]) ||
            []),
          {
            articleId: product.articleId,
            imagePath: product.imagePath,
            headline: product.headline,
            body: product.body,
          },
        ],
        ...currentObject[product.rootCategory],
      },
    }
  }, {})
  console.log(JSON.stringify(structuredProducts, null, 2))
}

generateProductJsonFromTsv(process.argv[2])
