// /当前这个模块：API进行统一管理
import ajax from './ajax.js';
import ajaxMock from "./ajaxMock"
//三级联动接口
///api/product/getBaseCategoryList
// get无参数
//发请求：axios发请求返回结果Promise对象
export const reqCategoryList = ()=>ajax({url:'/product/getBaseCategoryList',method:'get'});
export const getList = (params)=>ajax({url:'/list',method:'post', data: params});

export const getCartList = ()=>ajax({url:'/cart/cartList',method:'get'});
export const addShopCar = (skuId, skuNum)=>ajax({url:`/cart/addToCart/${ skuId }/${ skuNum }`,method:'post'});
export const getGoodsSimple = (params)=>ajax({url:'/item/'+params ,method:'get'});
export const categoryList = ()=>ajaxMock({url:'/category',method:'get'});
export const b = ()=>ajaxMock({url:'/b',method:'get'});
export const floor = ()=>ajaxMock({url:'/floor',method:'get'});

