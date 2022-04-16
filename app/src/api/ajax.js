import axios from "axios"
//引入进度条
import nprogress from 'nprogress';
// 引入进度条样式
import "nprogress/nprogress.css";
//start:进度条开始done:进度条结束
import store from "@/store"

const requests = axios.create({
    //配置对象
    //基础路径，发请求的时候，路径中会出现api
    baseURL: "/api",
    //请求的超时时间5s
    timeout: 5000
})
//请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
requests.interceptors.request.use((config)=>{
    //config:配置对象，对象里面有一个属性很重要，headers请求头
    //如果有游客身份令牌加入到请求头中
    if(store.state.home.UUID_TOKEN){
        config.headers.useTempId = store.state.home.UUID_TOKEN
    }
    // 进度条开始
    nprogress.start()
    return config;
});
//相应拦截器
requests.interceptors.response.use((res)=>{
    //成功的回调函数：服务器相应数据回来以后，响应拦截器可以检测到，可以做一些事情

    // 进度条结束
    nprogress.done()
    return res.data;
},(error)=>{
    //响应失败的回调函数
    // return Promise.reject(new Error('faile'));

    
    return Promise.reject(error.response);
});

export default requests