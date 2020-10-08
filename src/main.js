import Vue from 'vue'
import App from './App.vue'
import './styles/main.css'
import store from './store/index'
import axios from 'axios'
Vue.config.productionTip = false

new Vue({
  store,
  provide: {
    axios
  },
  render: h => h(App),
}).$mount('#app')
