import router from '@/router/index'
import store from '@/store/index'
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    // 从本地存储中恢复状态
    const savedLog = localStorage.getItem('log')
    if (savedLog) {
      this.$store.commit('log', JSON.parse(savedLog))
    }
  }
}).$mount('#app')
