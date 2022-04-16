import {getCartList} from "@/api"
const state = {
    cartList: []
}
const mutations = {
    GETCARTLIST(state, cartList) {
        state.cartList = cartList
    }
}
const actions = {
    async getCartList(context){
        let result = await getCartList()
        context.commit("GETCARTLIST", cartList)
    }
}
const getters = {

}
export default {
    state,
    mutations,
    actions,
    getters
}