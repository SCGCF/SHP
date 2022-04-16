import {getGoodsSimple, addShopCar} from "@/api"
const state = {
    goodsInfo: {}
}
const mutations = {
    GETGOODSSIMPLE(state, goodsInfo) {
        state.goodsInfo = goodsInfo
    }
}
const actions = {
    async getGoodsSimple(context, params) {
        let goodsInfo = await getGoodsSimple(params)
        if(goodsInfo.code == 200)
            context.commit("GETGOODSSIMPLE", goodsInfo.data)
    },
    async addShopCar(context, {skuId, skuNum}) {
            //向后台发送数据请求，判断是否购买成功
            let result = await addShopCar(skuId, skuNum)
            if(result.code == 200) {
            //成果则跳转路由到购物车
                // return "ok"
                return "ok"

            }else {
                return Promise.reject(new Error("faile"));
            }
    }
}
const getters = {
    categoryView(state) {
        return state.goodsInfo.categoryView || {}; 
    },
    skuInfo(state) {
        return state.goodsInfo.skuInfo || {};
    },
    spuSaleAttrList() {
        return state.goodsInfo.spuSaleAttrList || [];
    },
    
}
export default {
    state,
    mutations,
    actions,
    getters
}
