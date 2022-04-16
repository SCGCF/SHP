import Vue from "vue"
import VueRouter from "vue-router"
// 创建jsconfig.json文件配置，@可作为根路径使用
import Register from "@/pages/Register"
import Search from "@/pages/Search"
import Login from "@/pages/Login"
import Home from "@/pages/Home"
import Detail from "@/pages/Detail"
import ShopCart from "@/pages/ShopCart"
import AddCartSuccess from "@/pages/AddCartSuccess"

// 解决使用编程式导航多次调用问题导致报错
let originPush = VueRouter.prototype.push;
let originRepalce = VueRouter.prototype.replace;
// 重写push
VueRouter.prototype.push = function (location, resolve = ()=>{}, reject = ()=>{}) {
    originPush.call(this, location, resolve, reject)
}
//重写replace
VueRouter.prototype.replace = function (location, resolve = ()=>{}, reject = ()=>{}) {
    originRepalce.call(this, location, resolve, reject)
}

Vue.use(VueRouter)
export default new VueRouter({
    routes: [
        {
            path: "/addCartSuccess/:skuNum?",
            component: AddCartSuccess
        },
        {
            path: "/shopCart",
            component: ShopCart
        },
        {
            path: "/detail/:kusId",
            component: Detail
        },
        {
            path: "/register",
            component: Register
        },
        {
            path: "/home",
            component: Home
        },
        {
            //占位后面加?表示参数可传可不传(解决了未传参数情况下路径错误)
            path: "/search/:keyword?",
            component: Search,
            meta: {
            
            },
            name: "search"
        },
        {
            path: "/login",
            component: Login
        },
        {
            path: "/",
            redirect: "/home"
        }
    ]
})