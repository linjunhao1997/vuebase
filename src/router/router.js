//import About from '@/views/About'

export default [
    {
        path: '/about',
        name: 'about',
        //component: About
        component: () => import('@/views/About')
    }

]