import template from './collection.html'
import {
  ADD_LOCALE,
  REMOVE_ITEM
} from '../../module/events'
export default {
  template,
  props: {
    item: {
      type: Object,
      required: true
    },
    buttons: {
      type: Array,
      required: true
    }
  },
  methods: {
    onButton (action) {
      switch (action) {
        case 'cancel':
          this.$store.dispatch(ADD_LOCALE, null)
          break
        case 'add':
          this.$store.dispatch(ADD_LOCALE, { ...this.item })
          break
        case 'remove':
          this.$store.dispatch(REMOVE_ITEM, this.item)
          break
      }
    }
  }
}
