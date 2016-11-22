import _ from 'lodash'

export const parse = (data) => {
  let response = []
  for (let key in data) {
    let current = data[key]
    response.push({ description: current.description, id: key, language: getLocale(current.locale) })
  }
  response.sort((a, b) => { return a.id - b.id || a.id.localeCompare(b.id) })
  return response
}
export const getLocale = (data) => {
  let response = []
  for (var key in data) response.push({ locale: key, content: data[key] })
  return response
}
export const transform = (json) => {
  return json.body
}

export const enrich = (a, b) => {
  let c = JSON.parse(JSON.stringify(a))
  while (a.length) a.pop()
  return _.reduce(c.concat(b), (sum, n, i) => {
    const found = _.find(sum, item => item.id === n.id)
    if (!found) {
      sum.push(n)
      return sum
    }
    found.language = _.uniqBy(n.language.concat(found.language), 'locale')
    return sum
  }, a)
}

export const importer = (raw, locale) => {
  return new Promise((resolve, reject) => {
    let json = JSON.parse(raw)
    // does the json file have multiple languages or is it a single language export...
    const single = json instanceof Object && !(json instanceof Array)
    const multi = json instanceof Object && json instanceof Array

    let response = []

    if (single) { // prob. only one language is in this file, see if it contains only key values
      for (let key in json) {
        if (typeof json[key] !== 'string') {
          if (json[key] instanceof Object && 'locale' in json[key]) {
            let language = []
            for (let loc in json[key].locale) {
              language.push({ locale: loc, content: json[key].locale[loc] })
            }
            response.push({ description: json[key].description, id: key, language: language })
          } else return reject('no key value object...')
        } else response.push({ description: '', id: key, language: [{ locale, content: json[key] }] })
      }
      return resolve(response)
    }
    if (multi) {
      for (let key in json) {
        const item = json[key]
        if (!('description' in item && typeof item.description === 'string')) return reject('description missing...')
        if (!('language' in item && item.language instanceof Array)) return null
        for (let i = 0; i < item.language.length; i++) {
          if (!('locale' in item.language[i] && typeof item.language[i].locale === 'string')) return reject('locale missing...')
          if (!('content' in item.language[i] && typeof item.language[i].content === 'string')) return reject('description missing...')
        }
      }
    }
    return resolve(json)
  })
}
