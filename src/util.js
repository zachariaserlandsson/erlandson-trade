export const fetchResourceAtPath = (path) => {
  try {
    const fetchedModule = require(`${__dirname}${path}`)
    return fetchedModule.default
  } catch (error) {
    console.error(`Error encountered attempting to fetch resource at path ${path}`, error)
  }
}

export const mailAdress = 'info@erlandson-trade.se'
