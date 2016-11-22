import template from './single.html'

export default {
  template,
  props: {
    json: {
      type: Array,
      required: false
    },
    locale: {
      type: String,
      required: false
    }
  },
  methods: {
    content (item, locale) {
      for (let key in item.language) {
        if (item.language[key].locale === locale) {
          return item.language[key].content
        }
      }
      return '&#160;'
    }
  }
}
