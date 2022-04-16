import { getList } from "@/api"
//state:仓库存储数据的地方
const state = {
    list: {}
}
//mutations:修改state的唯一手段
const mutations = {
    GETGOODSLIST(state, list) {
        state.list = list
    }
}
//action:处理action,可以书写自己的业务逻辑，也可以处理异步
const actions = {
    async getGoodsList(context, params={}) {
        let list = await getList(params);
        if(list.code ==  200)
            context.commit("GETGOODSLIST", list.data)
    }
}
// /getters:理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
const getters = {
    //这里state时本仓库state
    goodsList(state) {
        return state.list.goodsList
    },
    attrsList(state) {
        return state.list.attrsList
    },
    trademarkList(state) {
        return state.list.trademarkList
    },
    total(state) {
        return state.list.total
    },
    pageNo(state) {
        return state.list.pageNo
    },
    pageSize(state) {
        return state.list.pageSize
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}