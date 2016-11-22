import template from './tag.html'

export default {
  template,
  data () {
    return {
      id: '',
      description: '',
      error: ''
    }
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    json: { // TODO! hier weg
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    onButton: {
      type: Function,
      required: true
    }
  },
  computed: {
    isInvalid () {
      return this.error || !this.id || !this.description
    }
  },
  watch: {
    id (value) {
      let isValid = value ? /^[a-zA-Z0-9_]+$/.test(value) : true
      if (!isValid) {
        this.error = 'ID can only contain alphabet, number and underscore'
        return
      }
      if (value) {
        // new entry should have an unique id
        for (let i = 0; i < this.json.length; i++) {
          if (this.json[i] === this.item) continue
          if (this.json[i].id.toLowerCase() !== value.toLowerCase()) continue
          this.error = 'ID given is already used !'
          return
        }
      }
      this.error = ''
    }
  }

}
