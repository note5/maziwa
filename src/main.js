// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import router from './router'
import 'vuetify/dist/vuetify.min.css' 
import VueLocalStorage from 'vue-localstorage'


//vuex stuff
import store from '@/store/store'
import {sync} from 'vuex-router-sync'

Vue.config.productionTip = false
Vue.use(VueLocalStorage)

Vue.use(Vuetify)
sync(store,router) //sync the store and router
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
