# Vue translation tool
### simple but powerfull translation tool for vue

## How to install it 
 ```bash 
 npm install vue-i18n-manager 
 ```
## How to use it 
 You only need to install the plugin, pass your VuexStore instance in the options object and you're good to go! 


 ```js 
import Vue from 'vue' 
import store from './store' // import your VuexStore instance 
import VueTranslationTool from 'vue-translation-tool'

Vue.use(VueTranslationTool, { store })) 
```

in your template
```
<vue-translation-tool url="all.json"></vue-translation-tool>
```
you can pass an 'url' to a previous exported language file, this will be loaded when the component is mounted

