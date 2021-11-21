const urlLabelTranslationJson = require('./url_label_translation.json')

const _translateValue = ({ value, from, to }) => {
  if (!value) return ''
  const matchingTranslation = urlLabelTranslationJson.find(
    (translation) => translation[from] === value
  )
  return matchingTranslation && matchingTranslation[to]
}

export const getPath = ({ rootCategory, subCategory }) => {
  return `${_translateValue({ value: rootCategory, from: 'label', to: 'url' })}/${_translateValue({
    value: subCategory,
    from: 'label',
    to: 'url',
  })}`
}

export const getCategoriesFromPath = ({ rootCategoryPath, subCategoryPath }) => {
  return {
    rootCategory: _translateValue({ value: rootCategoryPath, from: 'url', to: 'label' }),
    subCategory: _translateValue({ value: subCategoryPath, from: 'url', to: 'label' }),
  }
}
