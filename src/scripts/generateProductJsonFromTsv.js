const fs = require('fs')

const _tabSplitRow = (row) => row.split('\t').map((value) => value.trim())
const _toCapitalCase = (s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()

const _generateParagraphsObject = (bodyParts) =>
  bodyParts.reduce((bodyParagraphs, bodyPart) => {
    bodyPart = bodyPart.trim()
    if (!bodyPart) return bodyParagraphs
    const isLinkBodyPart = bodyPart.toLowerCase().includes("se '")
    return [
      ...bodyParagraphs,
      {
        text: bodyPart.replace(/\[/g, '').replace(/\]/g, ''),
        ...(isLinkBodyPart ? { href: 'www.google.com' } : {}),
      },
    ]
  }, [])

const _generateProductObject = (row) => {
  const bodyParts = row[1].replace(/"/g, '').split('  ')
  const bodyParagraphs = _generateParagraphsObject(bodyParts)
  return {
    headline: _toCapitalCase(row[0]),
    bodyParagraphs,
    articleId: row[2],
    imageSources: row[3].split(', ').filter(Boolean),
  }
}

const generateProductJsonFromTsv = (tsvPath) => {
  const sheetRows = fs.readFileSync(tsvPath).toString().split('\n').map(_tabSplitRow)
  const nonTableHeadRows = sheetRows.slice(1)
  const productObjects = nonTableHeadRows.map(_generateProductObject)
  console.log(JSON.stringify(productObjects, null, 2))
}

generateProductJsonFromTsv(process.argv[2])
