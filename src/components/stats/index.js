import template from './stats.html'

export default {
  template,
  props: {
    json: {
      type: Array,
      required: false
    },
    locales: {
      type: Array,
      required: false
    }
  },
  computed: {
    tagCount () {
      return this.json ? this.json.length : 0
    },
    availableLocales () {
      return this.locales ? this.locales.join(', ') : ''
    }
  }
}
