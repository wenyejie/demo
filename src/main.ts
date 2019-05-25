import Vue from 'vue'
import './styles'
import App from './App.vue'
import router from './router'
import store from './stores'
import components from './components'
// import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(components)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
