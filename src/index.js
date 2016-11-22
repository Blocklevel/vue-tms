import template from './template.html'
import './index.scss'
import prompt from './components/prompt'
import item from './components/item'
import search from './components/search'
import customFilter from './components/filter'
import collection from './components/collection'
import tag from './components/tag'
import splash from './components/splash'
import stats from './components/stats'
import single from './components/single'
import jsonExport from './components/json-export'
import JSONLoader from './util/JSONLoader'
import module from './module'
import {
  LOAD_JSON,
  REMOVE_ITEM,
  REMOVE_LOCALE,
  CURRENT_ITEM,
  ADD_ITEM,
  CREATE_ITEM,
  UPDATE_CREATE_ITEM,
  DELETE_ITEM,
 } from './module/events'

const install = (Vue, options = {}) => {
  const { store } = options
  const id = 'vue-copy-editor'

  store.registerModule(id, module)

  Vue.component(id, {
    template,
    components: {
      single,
      jsonExport,
      splash,
      prompt,
      item,
      search,
      collection,
      customFilter,
      tag,
      stats
    },
    props: {
      url: {
        type: String,
        required: false
      }
    },
    data () {
      return {
        JSONLoader: null,
        input: null,
        dropdown: null
      }
    },

    methods: {
      async load (url) {
        this.$store.dispatch(LOAD_JSON, url)
      },
      onCreateID (id, description, create) {
        if (create) {
          const current = this.$store.getters.currentItem
          this.$store.dispatch(UPDATE_CREATE_ITEM, { id, description })
          this.$store.dispatch(CREATE_ITEM, false)
          this.$store.dispatch(CURRENT_ITEM, current)
        } else {
          this.$store.dispatch(CREATE_ITEM, false)
          this.$store.dispatch(CURRENT_ITEM, null)
        }
      },
      isItemVisibleInMenu (item) {
         // item has no id
        if (!item.id) return false
         // search is not part of id
        if (this.search) return item.id.indexOf(this.search) !== -1
        // no filter is set
        if (!this.emptiesOnly || !this.filter) return true
        // if a filter is set, only show the list of ids that
        // have no content set for a certain locale
        for (let i = 0; i < item.language.length; i++) {
          if (item.language[i].locale === this.filter) {
            return !item.language[i].content
          }
        }
        return true
      },
      onItemSelect (item) {
        this.$store.dispatch(CURRENT_ITEM, item)
      },
      onCreateLocale (item, content, locale) {
        this.$store.dispatch(ADD_ITEM, { item, content, locale })
      },
      onAddLocale (item) {
        this.dropdown = this.input = null // clear all input
      },
      onRemoveLocale (item, input, locale) {
        this.$store.dispatch(REMOVE_LOCALE, item)
      },
      onConfirmDelete (itemDelete) {
        if (itemDelete) {
          this.$store.dispatch(DELETE_ITEM)
          this.$store.dispatch(CURRENT_ITEM, null)
        } else this.$store.dispatch(REMOVE_ITEM, null)
      },
      highlight (term) {
        let regex = RegExp(this.search, 'gi')
        return term.replace(regex, '<strong>$&</strong>')
      }
    },
    computed: {
      isExportOpen () {
        return this.$store.getters.isExportOpen
      },
      isSummaryOpen () {
        return this.$store.getters.isSummaryOpen
      },
      filter () {
        return this.$store.getters.filter
      },
      locales () {
        return this.$store.getters.locales
      },
      removeItem () {
        return this.$store.getters.removeItem
      },
      menuIsOpen () {
        return this.$store.getters.menuIsOpen
      },
      addLocale () {
        return this.$store.getters.addLocale
      },
      addItem () {
        return this.$store.getters.addItem
      },
      createItem () {
        return this.$store.getters.createItem
      },
      currentItem () {
        return this.$store.getters.currentItem
      },
      availableLocales () {
        return this.$store.getters.availableLocales
      },
      isLoading () {
        return this.$store.getters.isLoading
      },
      emptiesOnly () {
        return this.$store.getters.emptiesOnly
      },
      localeIsDisabled () {
        return this.$store.getters.localeIsDisabled
      },
      search () {
        return this.$store.getters.search
      },
      json () {
        return this.$store.getters.json
      },
      hasResults () {
        if (!this.json || !this.json.length) return true
        for (let i = 0; i < this.json.length; i++) {
          if (this.isItemVisibleInMenu(this.json[i])) return true
        }
        return false
      },
      currentLanguageFilter () {
        return this.filter || this.dropdown
      },
      isVisible () {
        if (this.createItem || !this.currentItem) return false
        if (this.isItemVisibleInMenu(this.currentItem)) return true
        return false
      }
    },
    watch: {
      isLoading (url) {
        if (!url) return
        this.JSONLoader.fetch(url)
      }
    },
    mounted () {
      this.JSONLoader = new JSONLoader(Vue, store)
      // lets load some json if available in the props
      if (this.url) this.load(this.url)
      // TODO
      this.$on('import', (json) => {
        this.JSONLoader.add(json)
      })
    }
  })
}

export default { install }
