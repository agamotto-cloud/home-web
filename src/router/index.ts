import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    { path: '/home', component: () => import('@/view/home.vue') },
    { path: '/history', component: () => import('@/view/home.vue') },
    { path: '/area', component: () => import('@/view/home.vue') },
    { path: '/person', component: () => import('@/view/home.vue') },
    { path: '/tips', component: () => import('@/view/home.vue') },
    { path: '/forum', component: () => import('@/view/home.vue') },
    { path: '/user', component: () => import('@/view/home.vue') },
    { path: '/404', component: () => import('@/view/404.vue') },
]

export const navRouter = [
    { path: '/home', title: '首页'},
    { path: '/history', title: '史书'},
    { path: '/area', title: '地方志'},
    { path: '/person', title: '名人堂'},
    { path: '/tips', title: '历史小知识'},
    { path: '/forum', title: '论坛'},
    { path: '/user', title: '用户'}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from) => {
    return true;
})

export default router