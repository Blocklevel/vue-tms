import template from './prompt.html'

export default {
  template,
  props: {
    onButton: {
      type: Function,
      required: true
    },
    buttons: {
      type: Array,
      required: true
    }
  }
}
