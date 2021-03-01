import Vue from 'vue'
import Router from 'vue-router'
import routes from '@/router/router'
import store from '@/store'
import {setTitle} from "@/lib/util";

Vue.use(Router)

const router =  new Router({
    mode: 'history', // 默认hash,使用history需要后端在url匹配时重定向为index.html或404.html，然后在router拦截再返回一个404页面
    routes
})


// 跳转前处理
router.beforeEach((to, from, next) => {
    to.meta && setTitle(to.meta.title)
    const HAS_LOGINED = store.state.user.hasLogin;
    if (to.name !== 'login') {
        if (HAS_LOGINED) {
            next()
        } else {
            next({name: 'login'})
        }
    } else {
        if (HAS_LOGINED) {
            next({name: 'default'})
        } else {
            next()
        }
    }
})

// 跳转后处理
/*router.beforeEach((to, from) => {
    //HAS_LOGINED = false
})*/
export default router;

// 组件中使用router后退和前进
// this.$router.back()
// this.$router.push("/who")
// this.$router.push({name: 'who', query:{name: 'john'}, params:{name:john}}) // 前者是query传参，后者是占位符:name传参
// 注意占位符传参时可以使用`/who/${v}`,此时params参数失效

/**
 * 1.导航被触发
 * 2.在即将离开的页面组件利调用beforeRouteLeave
 * 3.调用全局的前置守卫 beforeEach
 * 4.在重用的组件利调用 beforeRouteUpdate
 * 5.调用路由守卫 beforeEnter
 * 6.解析异步路由组件
 * 7.在即将进入的页面组件利调用beforeRouteEnter
 * 8.调用全局的解析守卫 beforeResolve
 * 9.导航被确认
 * 10.调用全局后置守卫 afterEach
 * 11.触发dom更新
 * 12.用创建好的实例调用beforeRouteEnter里传给next的回调函数
 * */