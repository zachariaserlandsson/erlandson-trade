const fs = require('fs')

const _tabSplitRow = (row) => row.split('\t').map((value) => value.trim())

const _generateProductObject = (row) => {
  const productData = {
    rootCategory: row[0],
    subCategory: row[1],
    articleId: row[2],
    imagePath: row[3] === '-' ? null : row[3], // '-' used as n/a in product sheet
    headline: row[4],
    body: row[5],
  }
  return productData.rootCategory && productData.subCategory ? productData : null
}

const _urlifyCategoryName = (categoryName) => {
  return categoryName
    .replace(/-/g, '')
    .replace(/ /g, '')
    .replace(/,/g, '-')
    .replace(/&/g, '-')
    .replace(/å/g, 'a')
    .replace(/ä/g, 'a')
    .replace(/ö/g, 'o')
    .replace(/é/g, 'e')
    .toLowerCase()
}

const _generateUrlLabelTranslatorObject = (products) => {
  const allCategoryNames = Object.keys(products).reduce((categories, rootCategory) => {
    return categories.concat([rootCategory, ...Object.keys(products[rootCategory])])
  }, [])
  return allCategoryNames.map((categoryName) => {
    return {
      label: categoryName,
      url: _urlifyCategoryName(categoryName),
    }
  })
}

const generateProductJsonFromTsv = (tsvPath) => {
  const sheetRows = fs.readFileSync(tsvPath).toString().split('\n').map(_tabSplitRow)
  const nonTableHeadRows = sheetRows.slice(1)
  const productObjects = nonTableHeadRows.map(_generateProductObject).filter(Boolean)
  const structuredProducts = productObjects.reduce((currentObject, product) => {
    return {
      ...currentObject,
      [product.rootCategory]: {
        ...currentObject[product.rootCategory],
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
      },
    }
  }, {})
  fs.writeFileSync(
    `${__dirname}/../products/inventory.json`,
    JSON.stringify(structuredProducts, null, 2)
  )
  fs.writeFileSync(
    `${__dirname}/../products/url_label_translation.json`,
    JSON.stringify(_generateUrlLabelTranslatorObject(structuredProducts), null, 2)
  )
}

generateProductJsonFromTsv(process.argv[2])
