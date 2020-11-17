import Vue from 'vue'
import Vuex from 'vuex'
import App from './modules/app'

import Getters from './getters'

Vue.use(Vuex)

// const modulesFiles = require.context('./modules', true, /\.js$/)

// const modules = modulesFiles.keys().reduce((modules, modulePath) => {
//   const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
//   const value = modulesFiles(modulePath)
//   modules[moduleName] = value.default
//   return modules
// }, {})

const store = new Vuex.Store({
  modules: {
    app: App
  },
  getters: Getters
})

export default store
