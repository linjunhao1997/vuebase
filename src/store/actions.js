// 异步请求或异步获取数据，然后调用mutations的方法，其中1个action可以通过dispatch触发其他actions
import {getTime} from '@/api/tpApi'
const actions = {
    async GET_CHINESE_STANDARD_TIME({commit}) {
       try {
           const res = await getTime()
           const data = await res.json()
           commit('SET_START_TIME', data.data.t)
           console.log(data.data.t)
       } catch (err) {
           console.log(err)
       }
    }
}
export default actions