import template from './item.html'

export default {
  template,
  data () {
    return {
      input: null
    }
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    onButton: {
      type: Function,
      required: false
    },
    buttons: {
      type: Array,
      required: false
    },
    locale: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: false
    },
    create: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
