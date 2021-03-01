// 触发dom更新
const mutations = {
    SET_APP_NAME(state, payload) {
        state.appName = payload
    },
    SET_START_TIME(state, payload) {
       state.startTime = parseInt(payload)
    }
}
export default mutations