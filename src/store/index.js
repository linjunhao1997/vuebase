import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from "./getters";
import user from './module/user'
import persistedState from './plugin/persistedState'

Vue.use(Vuex)
/**
 * 动态注册模块则在组件中使用this.$store.registerModule
 */
export default new Vuex.Store({
    strict: true,
    state,
    getters,
    mutations,
    actions,
    modules: {
        user
    },
    plugins: [
        // 如果使用history模式，如果不是在应用内进行页面跳转，直接在url输入跳转，会导致state重置
        // 如果使用hash模式，直接在url输入跳转时state不会刷新，但是点刷新按钮会导致state重置
        // 还是加上保险一点
        persistedState
    ]
})