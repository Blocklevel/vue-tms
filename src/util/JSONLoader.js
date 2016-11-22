import { parse, transform } from './parser'
import { JSON_DATA } from '../module/events'

export default class JSONLoader {
  Vue = null
  store = null
  constructor (Vue, store) {
    this.Vue = Vue
    this.store = store
  }
  async fetch (url) {
    const data = parse(transform(await this.Vue.http.get(url)))
    this.store.dispatch(JSON_DATA, data)
    return data
  }
  add (json) {
    this.store.dispatch(JSON_DATA, json)
  }
}
