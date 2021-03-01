const state = {
    //
    hasLogin: false
}
const mutations = {

    LOGIN(state, payload){
        state.hasLogin = payload;
    }

}

const actions = {
    //
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}