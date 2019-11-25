import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
// import { Loading, Message } from 'element-ui' // 引用element-ui的加载和消息提示组件
// import login from './components/loading.vue'
// import Loading from '@/views/loading'
// Vue.use(Loading);
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
// axios.defaults.baseURL = '/api'
// axios.defaults.headers.post['Content-Type'] = 'application/json';
// let loading = null
// 请求拦截器
axios.interceptors.request.use(
  config => {
    // window.localStorage.setItem('token','yuke')
    let token =window.localStorage.getItem('token')
    console.log(token)
    if (token) {
      config.headers.Authorization = token // 请求头部添加token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
import '@/assets/index.css'
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
