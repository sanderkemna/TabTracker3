// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import store from '@/store/store'
import { sync } from 'vuex-router-sync'
import '@mdi/font/css/materialdesignicons.css'
import VueYouTubeEmbed from 'vue-youtube-embed'
import Panel from '@/components/global/Panel'

Vue.use(VueYouTubeEmbed)

Vue.config.productionTip = false

Vue.component('panel', Panel)

Vue.use(Vuetify)

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  vuetify: new Vuetify()
})
