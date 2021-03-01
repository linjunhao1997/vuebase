import Vue from 'vue'
const Bus = new Vue()
/**
 * 用于全局事件广播使用，在main.js中全局注册为$bus,在广播的组件中使用this.$bus.$emit广播，
 * 在接收的组件中使用this.$bus.$on接收
 */
export default Bus