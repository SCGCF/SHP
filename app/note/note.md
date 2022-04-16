创建项目: vue create 项目名
启动项目: npm run serve
安装路由: npm i vue-router@3.2.0
安装1ess-loader: npm install --save less less-loader@5 
安装axios: npm i axios

注意点:
getters的作用:简化数据(在需要的组件中搭配mapGetters使用可以简化属性的获取方式)
注意点:在使用state时，应注意state中的属性是否更新，如果未更新回导致报错
举例:
初始化时:state = {goods: {}}
参数返回时: state = {goods: {data: {code: 200}}}
getters{
    data(state) {
        return state.goods.data  || {};//这里如果未返回数据会报错goods.data为undefined,所以需要处理
    }
}

路由配置:
1.创建router文件夹+index.js
2.配置路由(重定向{path: "/" ,redirect: "/跳转路径")
3.引入路由在main.js
4.注册路由({router:router})
5:注册完路由，不管路由路由组件、还是非路由组件身上都有$route、$router属性
$route:一般获取路由信息【路径、query、.params等等】
$router:一般进行编程式导航进行路由跳转【push replace】

meta的作用:
显示或者隐藏组件：v-if|v-show
Footer组件：在Home、Search.显示Footer:组件
Footer组件：在登录、注册时候隐藏的
6.我们可以根据组件身上的$route获取当前路由的信息，通过路由路径判断Footer显示与隐藏。
6.2配置的路由的时候，可以给路由添加路由元信息【meta={show:true}】,路由需要配置对象

路由传参:
//路由传递参数：
/第一种：字符串形式
/this.$router.push("/search/"this.keyword+"?k="+this.keyword.toUppercase());
//第二种：模板字符串
/this.$router.push(/search/${this.keyword}?k=$this.keyword.toUppercase()})
//第三种(开发常用)：对象(注意当有params参数时在路由中要配置name属性和占位)
this.$router.push({name:"search",params:{keyword:this.keyword},query:{k:this.keyword.toUppercase()})

解决了使用params属性，未传参数情况下路径错误: 占位后面加?表示参数可传可不传
//2:如何指定params参数可传可不传？
//如果路由要求传递params参数，但是你就不传递params参数，发现一件事情，URL会有问题的
//如何指定params参数可以传递、或者不传递，在配置路由的时候，在占位的后面加上一个问号【params可以传递或者不传递】
/this.$router.push({name:search',query:{k:this.keyword.touppercase()}});
/面试题3：params参数可以传递也可以不传递，但是如果传递是空串，如何解决？(如果传递空串会导致路径错误)
//使用undefined解决：params参数可以传递、不传递（空的字符串）
/this.$router.push({name:'search',params:{keyword:"" || undefined},query:{k:this.keyword.toUppercase})

路由组件传递props数据？
在路由中配置:props:($route)=>{
return {keyword:$route.params.keyword,k:$route.query.k};

解决使用编程式导航多次调用问题导致报错
重写Vouter.prototype.push和replace方法

6:axios二次封装
XMLHttpRequest、fetch、JQ、axios
6.1为什么需要进行二次封装axios?
请求拦截器、响应拦截器：请求拦截器，可以在发请求之前可以处理一些业务、响应拦截器，当服务器数据返回以后，可以处
理一些事情
6.2在项目当中经常API文件夹【axios】
接口当中：路径都带有/api
baseURL:"/api"
axios发送请求的完整用法:axios({
  method: 'post',
  url: '/user/12345',
  data: {
  firstName: 'Fred',
  lastName: 'Flintstone'
})


API进行统一管理:
主要解决后期接口发生变动后方便对接口的修改

跨域问题解决
什么是跨域：协议、域名、端口号不同请求，称之为跨域
在vue.config.js文件配置代理服务器
devServer:{
        proxy:{
            //api表示路径带有api的走代理服务器
            '/api':{
                target:'http://39.98.123.211',
                //pathRewrite:{'/api':',
            }
        }
    }
}

nprogress进度条的使用:
下载命令:npm install --save nprogress
1.//引入进度条
import nprogress from 'nprogress';
2.//引入进度条样式
import "nprogress/nprogress.css";
3.//在请求发送前调用nprogress.start:进度条开始，在响应返回时调用nprogress.done:进度条结束
4.进度条样式可修改

Vuex的使用:
下载命令:npm install --save vuex@3
Vuex状态管理库
vuex是什么？
Vuex是官方提供一个插件，状态管理库，集中式管理项目中组件共用的数据。
Vuex的使用要求:
切记，并不是全部项目都需要Vuex,如果项目很小，完全不需要Vuex,如果项目很大，组件很多、数据很多，数据维护很费劲劲.
Vuex {state,mutations,actions,getters,modules}
使用步骤:
1.创建文件夹store+文件index.js
2.index.js文件配置
3.在入口文件(main.js)引入仓库store
4.在入口文件(main.js)注册仓库store

全局组件的使用:
1.创建组件文件夹+index.js
2.index.js中书写组件结构和样式
3.在入口文件(main.js)引入组件
4.使用Vue.component(组件名, 组件)注册
5.全局组件的放置位置: components文件夹下

@mouseover鼠标移入事件
@mouseleave鼠标移出事件

解决卡顿现象
正常：事件触发非常频繁，而且每一次的触发，回调函数都要去执行（如果时间很短，而回调函数内部有计算，那么很可能出现浏览器卡顿）
防抖：用户操作很频繁，但是只是执行一次
节流：用户操作很频繁，但是把频繁的操作变为少量操作【可以给浏览器有充裕的时间解析代码】
解决方案:(使用Lodash)
1.引入Lodash(按需引入)
2.调用方法
防抖解决:_.debounce(回调函数(function),时间)
节流解决:_.throttle(回调函数(function),时间)

三级联动路由传参(使用编程式导航+事件委派机制):
为什么不使用声明式导航(router-link):当联系服务器的参数时，通过v-for展示，可能导致瞬间vue渲染多个(router-link)，则会导致卡顿。
为什么要使用事件委派机制:当在通过v-for展示时，会位多个编程式导航绑定回调函数,也有可能导致卡顿
解决办法:
为整个需要声明式导航的父元素绑定事件，在利用事件委派机制
如何确定选择特定的子元素:
1.给子元素添加自定义属性
2.利用回调函数给传入的事件对象(event)
3.在调用event.target.dataset(attributes获取所有的属性)可以获取对象身上的自定义属性(并通过es6语法解构出自定义属性)
4.通过属性的有无判断点击对象
注意点:
1.自定义属性的定义(:data-属性名)
2.dataset中自定义属性的名字会全变为小写

动画与过渡的使用:
1.必须有v-if和v-show
2.必须有transition标签

mockjs的使用(模拟服务器返回数据):
下载命令: npm install mockjs
使用步骤：
1.在项目当中src文件夹中创建mock文件夹
2.第二步准备JsON数据(mock文件夹中创建相应的]SoN文件)----格式化一下，别留有空格（跑不起来的）
3.把mock数据需要的图片放置到oublic文件夹中【public文件夹在打包的时候，会把相应的资源原封不动打包到dist文件夹
4.创建mockSerer.js通过mockjs插件实现模拟数据
5.mockServer.js文件在入口文件中引入（至少需要执行一次，才能模拟数据）
6.在api的目录下添加mock请求接口文件ajaxMock.js并在主文件中配置发送接口

swper轮播图插件的使用(详情见官网):
下载命令:npm install swiper@5
使用步骤:
1.主文件引入css样式
2.在有轮播的组件挂载时完毕实例化swiper对象
解决实例化swiper对象时dom结构未响应完成和数据响应未完成
watch:使用watch监视属性的变化(由后台响应返回的数据)
nextTick函数:用来检测dom结构是否响应完毕

组件通信的方式:
props:用于父子组件通信
自定义事件：@on@emit可以实现子给父通信
全局事件总线：$bus全能
pubsub-js:vue当中几乎不用全能
插槽
vuex

服务器交互操作(场景:用户搜索):
1.Object.assign(对象1, 对象2, 对象3, ....)将从第一个参数以后的参数的对象属性与第一个参数的对象相同的属性进行赋值
2.在挂载前(beforeMount)利用assign方法搜集数据，在挂载时(mounted)发送请求数据，挂载完毕利用对路由($route)的监听持续与服务器交互数据
3.返回数据时把多余无效属性置为undefined,将不会给服务器发送该参数(优化)
4.请求发送后，路由再次跳转，处理地址栏参数显示(优化)

兄弟通信(全局事件总线):
1.在vm创建前(beforeCreate)中给Vue的实例对象(Vue.prototyoe)绑定属性$bus,赋值为vm: Vue.prototyoe.$bus = this
2.在需要处理数据的组件,在组件挂载前8书写自定义函数: this.$bus.$on("函数名", ()=>{处理过程})
3.在需要调用该自定义函数的组件执行:this.$bus.$emit("函数名")

子与父通信(自定义事件):
1.子组件标签加上@自定义事件名="自定义函数名"
2.子组件调用父组件自定义函数: this.$emit("自定义事件名",参数,...)

1)分页功能实现
2)分页器展示，需要哪些数据（条件）？
需要知道当前是第几个：pageNo字段代表当前页数
需要知道每一个需要展示多少条数据：pagesize字段进行代表
需要知道整个分页器一共有多少条数据：tota1字段进行代表--[获取另外一条信息：一共多少页]
需要知道分页器连续页码的个数：5引7【奇数】，因为奇数对称（好看）
总结：对于分页器而言，自定义前提需要知道四个前提条件。
pageNo:当前第几个
pagesize:代表每一页展示多少条数据
total:代表整个分页一共要展示多少条数据
continues:代表分页连续页码个数

Math.ceil():向上取整
Math.parse():向下取整

放大镜实现:
@mousemove:鼠标移动事件
offsetX: 相对于父定位的x坐标
offsetY: 相对于父定位的y坐标
offsetWeith: 盒子的总宽度
offsetHeight: 盒子的总高度

3)购物车
3.1购物车静态组件-需要修改样式结构
调整css让各个项目对齐别除第三项153510171013
3.2向服务器发起ajax,获取购物车数据，操作vuex三连环、组件获取数据展示数据
发现：发请求的时候，获取不到你购物车里面数据，因为服务器不知道你是谁？
3.3UUID临时游客身份
3.4动态展示购物车

UUID临时游客身份的使用:
1.下载依赖包:npm i uuid
2.在仓库中生成uuid作为游客身份
3.与后台协商在请求头中携带给字段作为游客身份(api中重写请求时加入字段:因为每次发送都需要让后台清楚身份):config.header.属性名


数组对象.every((e)=>{return 判断语句})
说明:
1.e为每个数组中元素
2.当遍历到其中一个判断语句返回false则退出
使用场景: 1.全选框

Promise.all([promise对象, promise对象, promise对象, ...])的使用:
作用:如果有一个promise对象出现异常则函数返回false
使用场景: 进行批量请求时

3)登录与注册静态组件-(处理共用图片资源问题)
登录与注册功能(git):必须要会的技能
3.1登录与注册的静态组件
3.2 assets文件夹-放置全部组件共用静态资源I
3.3在样式当中 ~@ 符号【src别名】