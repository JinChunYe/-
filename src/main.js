import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'

Vue.config.productionTip = false

//添加全局的style
import './assets/css/style.css'

//添加coursetab的样式
import './assets/css/coursetab.css'

//添加PreviewCourse的样式
import './assets/css/preview-course.css'

// 配置公共的url
Axios.defaults.baseURL = 'http://rap2api.taobao.org/app/mock/232209/'

// 配置axios 挂载到vue父级上
Vue.prototype.$axios = Axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
