import {
  JSON_DATA,
  LOAD_JSON,
  CURRENT_ITEM,
  REMOVE_ITEM,
  REMOVE_LOCALE,
  CREATE_ITEM,
  UPDATE_CREATE_ITEM,
  ADD_ITEM,
  ADD_LOCALE,
  DELETE_ITEM,
  TOGGLE_MENU,
  MISSING_LOCALES,
  TOGGLE_SUMMARY,
  TOGGLE_JSON_EXPORT,
  FILTER,
  LOCALE_DISABLED,
  EMPTIES_ONLY,
  SEARCH
} from './events'

import { enrich } from '../util/parser'

const hasLocale = (locales, item, locale) => {
  if (!locales.length) return true
  if (!locale || !item) return false
  for (let i = 0; i < item.language.length; i++) {
    if (item.language[i].locale === locale) return true
  }
  return false
}
export default {
  [JSON_DATA] (state, payload) {
    const before = state.json.length
    enrich(state.json, payload)
    state.stats.added = state.json.length - before
    state.stats.updated = state.json.length - payload.length
    state.stats.total = state.json.length

    while (state.availableLocales.length) state.availableLocales.pop()

    state.json.forEach((item) => {
      item.language.forEach((value) => {
        if (state.availableLocales.indexOf(value.locale) === -1) {
          state.availableLocales.push(value.locale)
        }
      })
    })

    state.availableLocales.sort()
  },
  [LOAD_JSON] (state, payload) {
    state.isLoading = payload
  },
  [MISSING_LOCALES] (state, payload) {
    while (state.locales.length) state.locales.pop()
    if (!state.currentItem) return
    let locales = []
    for (let key in state.currentItem.language) {
      locales.push(state.currentItem.language[key].locale)
    }
    for (let key in state.availableLocales) {
      const locale = state.availableLocales[key]
      const index = locales.indexOf(locale)
      if (index === -1) state.locales.push(locale)
    }
  },
  [LOCALE_DISABLED] (state) {
    state.localeIsDisabled = hasLocale(state.locales, state.currentItem, state.filter)
  },
  [ADD_ITEM] (state, payload) {
    const { item, content, locale } = payload
    state.addItem = { content, locale }
    state.addLocale = null
    item.language.unshift(state.addItem)
  },
  [CURRENT_ITEM] (state, item) {
    state.currentItem = item
    state.createItem = null
    state.isSummaryOpen = false
  },
  [UPDATE_CREATE_ITEM] (state, item) {
    const { id, description } = item
    state.currentItem.id = id
    state.currentItem.description = description
    state.currentItem.language = []
    if (state.json.indexOf(state.currentItem) !== -1) return
    state.json.push(state.currentItem)
  },
  [CREATE_ITEM] (state, create) {
    if (create) {
      const item = { id: '', description: '', language: [] }
      state.createItem = state.currentItem = item
      return
    }
    state.createItem = state.currentItem = null
  },
  [REMOVE_LOCALE] (state, item) {
    state.json.forEach((content) => {
      const index = content.language.indexOf(item)
      if (index > -1) content.language.splice(index, 1)
    })
  },
  [DELETE_ITEM] (state) {
    const index = state.json.indexOf(state.removeItem)
    if (index > -1) state.json.splice(index, 1)
    state.removeItem = null
  },
  [REMOVE_ITEM] (state, item) {
    state.removeItem = item
  },
  [TOGGLE_MENU] (state) {
    state.menuIsOpen = !state.menuIsOpen
  },
  [ADD_LOCALE] (state, item) {
    state.addLocale = item
  },
  [TOGGLE_SUMMARY] (state, item) {
    state.isSummaryOpen = !state.isSummaryOpen
  },
  [TOGGLE_JSON_EXPORT] (state, item) {
    state.isExportOpen = !state.isExportOpen
  },
  [FILTER] (state, filter) {
    state.filter = filter
  },
  [EMPTIES_ONLY] (state, boolean) {
    state.emptiesOnly = boolean
  },
  [SEARCH] (state, search) {
    state.search = search
  }
}
