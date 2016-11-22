import template from './filter.html'
import {
  CREATE_ITEM,
  TOGGLE_MENU,
  TOGGLE_SUMMARY,
  FILTER,
  TOGGLE_JSON_EXPORT,
  EMPTIES_ONLY
} from '../../module/events'
export default {
  template,
  props: {
    dropdown: {
      type: Array
    },
    buttons: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      filter: '',
      checkbox: false
    }
  },
  watch: {
    checkbox (value) {
      this.$store.dispatch(EMPTIES_ONLY, value)
    },
    filter (value) {
      this.$store.dispatch(FILTER, value)
    }
  },
  methods: {
    onButton (value) {
      switch (value) {
        case 'toggle':
          this.$store.dispatch(TOGGLE_MENU)
          break
        case 'add':
          this.$store.dispatch(CREATE_ITEM, true)
          break
        case 'export':
          this.$store.dispatch(TOGGLE_JSON_EXPORT)
          break
        case 'summary':
          this.$store.dispatch(TOGGLE_SUMMARY)
          break
      }
    }
  }
}
