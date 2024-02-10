import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "",
            redirect: "/home",
        },
        {
            path: "/home",
            name: "home",
            component: () => import("../home/home.vue"),
            meta: {
                home: true,
            },
        },
        {
            path: "/login",
            name: "login",
            component: () => import("../home/login.vue"),
            meta: {
                login: true,
            },
        },
        {
            path: "/me",
            name: "me",
            component: () => import("../me/me.vue"),
            meta: {
                me: true,
            },
        },
        {
            path: '/me/myMassage',
            name: 'myMassage',
            component: () => import('../me/myMassage.vue'),
            meta: {
            childrenPage: true,
            },
        },
        {
            path: '/me/historyMassage',
            name: 'historyMassage',
            component: () => import('../me/historyMassage.vue'),
            meta: {
            childrenPage: true,
            },
        },
        {
            path: '/me/moneyMassage',
            name: 'moneyMassage',
            component: () => import('../me/moneyMassage.vue'),
            meta: {
            childrenPage: true,
            },
        },
        {
            path: "/aips",
            name: "aips",
            component: () => import("../aips/aips.vue"),
            meta: {
                search: true,
            },
        },
        {
            path: "/diet",
            name: "diet",
            component: () => import("../diet/diet.vue"),
        },
        {
            path:"/diet/mywork",
            name:"mywork",
            component:()=>import("../diet/mywork.vue"),
            meta:{
                mywork:true
            }
        },
        // {
        //     path:"/diet/herbs",
        //     name:"herbs",
        //     component:()=>import("../components/herbs.vue"),
        //     meta:{
        //         childrenPage:true
        //     }
        // },
        {
            path:'/diet/:herbsId',
            name:'herbsPage',
            component:()=>import('../components/herbs.vue'),
            meta:{
                childrenPage:true
            },
        },
        {
            path:'/diet/:classify',
            name:'classifyPage',
            component:()=>import('../diet/classify.vue'),
            meta:{
                childrenPage:true
            },
        }
    ],
});

export default router;
