import Vue from 'vue';
import Vuex from 'vuex';
// 需要使用插件一次
Vue.use(Vuex);

// 模块式开发
// 引入各个模块
import home from "./home"
import search from "./search"
import detail from "./detail"
import shopCart from './shopCart';
//对外暴露Store类的一个实例
export default new Vuex.Store({
    // 注册各个模块
    modules: {
        home,
        search,
        detail,
        shopCart
    }
})