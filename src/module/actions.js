import {
  JSON_DATA,
  AVAILABE_LOCALES,
  LOAD_JSON,
  CURRENT_ITEM,
  REMOVE_ITEM,
  ADD_ITEM,
  CREATE_ITEM,
  REMOVE_LOCALE,
  ADD_LOCALE,
  UPDATE_CREATE_ITEM,
  TOGGLE_MENU,
  DELETE_ITEM,
  MISSING_LOCALES,
  TOGGLE_SUMMARY,
  TOGGLE_JSON_EXPORT,
  FILTER,
  LOCALE_DISABLED,
  EMPTIES_ONLY,
  SEARCH
} from './events'
import JSONLoader from '../util/JSONLoader'

export default {
  [JSON_DATA]: ({ commit }, json) => {
    commit(JSON_DATA, json)

    const availableLocales = []
    json.forEach((item) => {
      item.language.forEach((value) => {
        if (availableLocales.indexOf(value.locale) !== -1) return
        availableLocales.push(value.locale)
      })
    })
    availableLocales.sort()
    commit(AVAILABE_LOCALES, availableLocales)
  },
  [LOAD_JSON]: ({ commit }, payload) => {
    commit(LOAD_JSON, payload)
    commit(MISSING_LOCALES)
  },
  [CURRENT_ITEM]: ({ commit }, item) => {
    commit(CURRENT_ITEM, item)
    commit(MISSING_LOCALES)
    commit(LOCALE_DISABLED)
  },
  [REMOVE_LOCALE]: ({ commit }, item) => {
    commit(REMOVE_LOCALE, item)
    commit(MISSING_LOCALES)
    commit(LOCALE_DISABLED)
  },
  [REMOVE_ITEM]: ({ commit }, item) => {
    commit(REMOVE_ITEM, item)
    commit(MISSING_LOCALES)
  },
  [ADD_ITEM]: ({ commit }, payload) => {
    commit(ADD_ITEM, payload)
    commit(MISSING_LOCALES)
    commit(LOCALE_DISABLED)
  },
  [CREATE_ITEM]: ({ commit }, create) => {
    commit(CREATE_ITEM, create)
    commit(MISSING_LOCALES)
  },
  [UPDATE_CREATE_ITEM]: ({ commit }, item) => {
    commit(UPDATE_CREATE_ITEM, item)
    commit(MISSING_LOCALES)
  },
  [ADD_LOCALE]: ({ commit }, item) => {
    commit(ADD_LOCALE, item)
    commit(MISSING_LOCALES)
  },
  [TOGGLE_MENU]: ({ commit }) => {
    commit(TOGGLE_MENU)
  },
  [DELETE_ITEM]: ({ commit }) => {
    commit(DELETE_ITEM)
    commit(MISSING_LOCALES)
  },
  [TOGGLE_SUMMARY]: ({ commit }) => {
    commit(TOGGLE_SUMMARY)
  },
  [TOGGLE_JSON_EXPORT]: ({ commit }) => {
    commit(TOGGLE_JSON_EXPORT)
  },
  [FILTER]: ({ commit }, filter) => {
    commit(FILTER, filter)
    commit(LOCALE_DISABLED)
  },
  [EMPTIES_ONLY]: ({ commit }, boolean) => {
    commit(EMPTIES_ONLY, boolean)
  },
  [SEARCH]: ({ commit }, search) => {
    commit(SEARCH, search)
  }
}
