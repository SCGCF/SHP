

1:vue-cli脚手架初始化项目。
node+webpack+淘宝镜像
node modules.文件夹：项目依赖文件夹
public文件夹：一般放置一些静态资源（图片），需要注意，放在public文件夹中的静态资源，webpack:进行打包的时候，会原封不动打包到dist文件夹中。
src文件夹（程序员源代码文件夹）：
assets.文件夹：一般也是放置静态资源（一般放置多个组件共用的静态资源），需要注意，放置在assets.文件夹里面静态资源，在webpack打包的时候，webpack会把静态资源当做一个模块，打包JS文件里面。
components文件夹：一般放置的是非路由组件（全局组件）
App.vue:唯一的根组件，Vue当中的组件(.vue)
main.js:程序入口文件，也是整个程序当中最先执行的文件
babel.config.js:配置文件(babel相关)
package.json文件：认为项目‘身份证’，记录项目叫做什么、项目当中有哪些依赖、项目怎么运行。
package-lock.json:缓存性文件
READM.md:项目说明性的文件

2:项目的其他配置
2.1 项目运行起来的时候，让浏览器自动打开(加上--open)
---package.json
"scripts":
"serve":"vue-cli-service serve --open",
"build":"vue-cli-service build",
"lint":"vue-cli-service lint"
2.2 eslint校验功能关闭。
--在根目录下，创建一个vue.config.js
比如：声明变量但是没有使用eslint校验工具报错。

2.3sc文件夹简写方法，配置别名。
jsconfig.json配置别名@提示【@代表的是src文件夹，这样将来文件过多，找的时候方便很多】
{
    "compileroptions": {
    "baseUr1": "./",
    "paths":{
            "@/*":["src/*"]
        }
    },
    "exclude":["node_modules","dist"]
}

4、完成非路由组件Header与Footer业务
在咱们项目当中，不在以HTML+CSS为主，主要搞业务、逻辑
在开发项目的时候：
1:书写静态页面(HTML+CSS)
2:拆分组件
3:获取服务器的数据动态展示
4:完成相应的动态业务逻辑
注意1：创建组件的时候，组件结构+组件的样式+图片资源
注意2：咱们项目采用的1ess样式，浏览器不识别1ess样式，需要通过1ess、1ess-loader【安装五版本的(npm install --save less less-loader@5)】进行处理
less,i
把1ess样式变为css样式，浏览器才可以识别。T
注意3：如果想让组件识别less样式，需要在style标签的身上加上lang=less

5)路由组件的搭建
vue-router
在上面分析的时候，路由组件应该有四个：Home、Search、Login、Register
-components.文件夹：经常放置的非路由组件（共用全局组件）
-pages|views.文件夹：经常放置路由组件
5.1配置路由
项目当中配置的路由一般放置在router文件夹中
5.2总结
路由组件与非路由组件的区别？
1:路由组件一般放置在pages|views文件夹，非路由组件一般放置components.文件夹中
2:路由组件一般需要在outer文件夹中进行注册（使用的即为组件的名字），非路由组件在使用的时候，一般都是以标签的形
式使用
3:注册完路由，不管路由路由组件、还是非路由组件身上都有$route、$router属性
$route:一般获取路由信息【路径、query、.params等等】
$router:一般进行编程式导航进行路由跳转【push replace】

//路由传递参数：
/第一种：字符串形式
/this.$router.push("/search/"this.keyword+"?k="+this.keyword.toUppercase());
//第二种：模板字符串
/this.$router.push(/search/${this.keyword}?k=$this.keyword.toUppercase()})
//第三种(开发常用)：对象(注意当有params参数时在路由中要配置name属性和占位)
this.$router.push({name:"search",params:{keyword:this.keyword},query:{k:this.keyword.toUppercase()})

6)Footer组件显示与隐藏
显示或者隐藏组件：v-if|v-show
Footer组件：在Home、Search.显示Footer:组件
Footer组件：在登录、注册时候隐藏的
6.I我们可以根据组件身上的$route获取当前路由的信息，通过路由路径判断Footer显示与隐藏。
6.2配置的路由的时候，可以给路由添加路由元信息【meta】,路由需要配置对象，它的key不能瞎写、胡写、乱写