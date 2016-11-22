import template from './search.html'
import {
  SEARCH
} from '../../module/events'
export default {
  template,
  data () {
    return {
      input: null
    }
  },
  methods: {
    clear () {
      this.input = ''
    }
  },
  watch: {
    input (value) {
      this.$store.dispatch(SEARCH, value)
    }
  }
}
