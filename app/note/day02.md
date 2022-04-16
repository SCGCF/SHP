6:axios二次封装
XMLHttpRequest、fetch、JQ、axios
6.1为什么需要进行二次封装axios?
请求拦截器、响应拦截器：请求拦截器，可以在发请求之前可以处理一些业务、响应拦截器，当服务器数据返回以后，可以处
理一些事情
6.2在项目当中经常API文件夹【axios】
接口当中：路径都带有/api
baseURL:"/api"
6.3axios基础不好，可以参考git |NPM关于axios文档