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
    ],
});

export default router;
