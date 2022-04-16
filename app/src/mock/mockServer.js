//先引入mockjs模块
import Mock from 'mockjs';
// /把JSON数据格式引入进来[JSON数据格式根本没有对外暴露，但是可以引入]
//webpack默认对外暴露的：图片、JSoN数据格式
import floor from './floor.json';
import b from './b';
import category from "./category.json"
//mock数据：第一个参数请求地址第二个参数：请求数据

Mock.mock("/mock/b",{code:200,data:b});//模拟首页大的轮播图的数据
Mock.mock("/mock/floor",{code:200,data:floor});
Mock.mock("/mock/category",{code:200,data:category});