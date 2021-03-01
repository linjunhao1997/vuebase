//import About from '@/views/About'

export default [
    {
        path: '/',
        name: 'default',
        components: {
            default: () =>import('@/views/Default'),
            footer: ()=>import('@/views/Footer')
        },
        // 路由守卫
        beforeEnter: (to, from, next) => {
            if (from.name === 'login') {
                console.log("登录成功跳转")
            }
            next();
        },
        meta: {
            title: "首页",
            transitionName: 'router'
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login'),
        meta: {
            title: "登录页"
        }
    },
    {
        path: '/about',
        name: 'about',
        //component: About
        component: () => import('@/views/About'),
        children: [
            {
                path: 'who/:name',
                name: 'who',
                // 不能和父组件同个组件，换1个新组件，props才能生效
                component: () =>import('@/views/AboutWho'),
                // 动态路由的参数自动传递到组件的props
                props: true
            }
        ],
        //props: { what:'something'}
        props: router => ({
            // 注意不能为params,只能是query
            what: router.query.what
        })
    },
    {
        path: '/404.html',
        component: () =>import('@/views/NotFound')

    },
    {
       path: '/index.html',
        redirect: to => {
            console.log(to.fullPath + "首页")
            return {
                path: "/"
            }
        }
    }
    ,
    {
        path: '*',
        component: () =>import('@/views/Error')
    }
]