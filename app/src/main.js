import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import TypeNav from "./components/TypeNav"
import Pagination from "./components/Pagination"
Vue.config.productionTip = false

//注册全局组件TypeNav
Vue.component(TypeNav.name, TypeNav)

//注册全局组件Pagination
Vue.component(Pagination.name, Pagination)

// 引入mockjs
import "@/mock/mockServer"

//引入swiper的css文件
import "swiper/css/swiper.css"

//引入仓库store
import store from "./store"

import {reqCategoryList} from "./api"
new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  //注册路由
  router,
  //注册仓库
  store
}).$mount('#app')
