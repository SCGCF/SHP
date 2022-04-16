import {reqCategoryList,categoryList, floor, b} from "@/api"
import {getUUID} from "@/utils/uuid_token"
//state:仓库存储数据的地方
const state = {
    categoryList: [],
    bannerList: [],
    floorList: [],
    UUID_TOKEN: getUUID()
}
//mutations:修改state的唯一手段
const mutations = {
    GETCATEGORYLIST(state, list) {
        // console.log("@" +state.categoryList)
        state.categoryList = list
    },
    GETBANNERLIST(state, list) {
        state.bannerList = list
    },
    GETFLOORLIST(state, list) {
        state.floorList = list
    }
}
//action:处理action,可以书写自己的业务逻辑，也可以处理异步
const actions = {
    async getBannerList(context) {
        // 使用mock返回模拟数据
        const obj = await b()
        context.commit("GETBANNERLIST", obj.data)
    },
    async getFloorList(context) {
        // 使用mock返回模拟数据
        const obj = await floor()
        console.log(obj)
        console.log("obj")
        context.commit("GETFLOORLIST", obj.data)
    },
    async getCategoryList(context) {
        // const obj = await reqCategoryList()
        // console.log(JSON.stringify(obj.data))
        // context.commit("GETCATEGORYLIST", obj.data)
        console.log(categoryList)
        // 使用mock返回模拟数据
        const obj = await categoryList()
        context.commit("GETCATEGORYLIST", obj.data)
    },

}
// /getters:理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
const getters = {}

export default {
    // namespaced: true,
    state,
    mutations,
    actions,
    getters
}