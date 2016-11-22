import template from './json-export.html'
import { importer } from '../../util/parser'
import JSZip from 'jszip'

export default {
  template,
  props: {
    json: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      data: null,
      error: null,
      name: 'all.zip',
      locale: '',
      download: null
    }
  },
  mounted () {
    this.update()
  },
  methods: {
    downloadZip () {
      const zip = new JSZip()
      zip.file('all.json', JSON.stringify(this.json, null, 2))

      let language = {}
      this.json.forEach((item) => {
        item.language.forEach((entry) => {
          if (!language[entry.locale])language[entry.locale] = {}
          language[entry.locale][item.id] = entry.content
        })
      })

      for (let locale in language) {
        zip.file(`${locale}.json`, JSON.stringify(language[locale], null, 2))
      }

      zip.generateAsync({type: 'blob'})
      .then((content) => {
        this.download = window.URL.createObjectURL(new window.Blob([content], { type: 'application/zip' }))
      })
    },
    update () {
      this.data = JSON.stringify(this.json, null, 2)
    },
    onFileChange (e) {
      const { files } = e.target
      if (!files.length) return
      const file = files[0]
      this.locale = this.getLocaleFromFileName(file)
      this.loadFile(file)
    },
    getLocaleFromFileName (file) {
      let parsed = file.name.split('.')
      parsed.pop()
      return parsed.join('.')
    },
    loadFile (file) {
      this.reader = new window.FileReader()
      this.configureFileReader('add')
      this.reader.readAsText(file)
    },
    configureFileReader (type) {
      this.reader[`${type}EventListener`]('loadstart', this.onLoadStart)
      this.reader[`${type}EventListener`]('progress', this.onProgress)
      this.reader[`${type}EventListener`]('abort', this.onAbort)
      this.reader[`${type}EventListener`]('error', this.onError)
      this.reader[`${type}EventListener`]('load', this.onLoaded)
      this.reader[`${type}EventListener`]('loadend', this.onLoaded)
    },
    onProgress (e) {
      const { loaded, total } = e
      this.setProgress(loaded / total)
    },
    async onLoaded (e) {
      const { result } = e.target
      this.configureFileReader('remove')
      this.error = ''
      try {
        const imported = await importer(result, this.locale)
        this.$parent.$emit('import', imported)
        this.update()
      } catch (error) {
        this.error = `unable to import , ${error}`
      }
    },
    toBinaryString (result) {
      if (typeof result === 'string') return result
      if (result instanceof ArrayBuffer) {
        var binary = ''
        var bytes = new Uint8Array(this.reader.result)
        var length = bytes.byteLength
        for (var i = 0; i < length; i++) binary += String.fromCharCode(bytes[i])
        return binary
      }
      this.log('unhandled type !', result)
      return null
    },
    setProgress (progress) {
      this.log('loading progress', progress)
    },
    onLoadStart (e) {
      this.log(e)
    },
    onAbort (e) {
      this.log('something happend, file aborted?', e)
    },
    onError (e) {
      this.log('something happend, file error?', e)
    },
    log (...args) {
      // console.log(args)
    }
  },
  computed: {
    locales () {
      return this.$store.getters.availableLocales
    },
    stats () {
      return this.$store.getters.stats
    }
  }
}
