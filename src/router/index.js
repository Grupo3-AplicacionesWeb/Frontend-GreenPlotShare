/**
 * Vue Router
 * @description: Vue Router configuration
 * @docs: https://router.vuejs.org/
 */

import {createRouter, createWebHistory} from "vue-router";
import HomeComponent from "../public/pages/home.component.vue";
import AboutComponent from "../public/pages/about.component.vue";
import LoginComponent from "../public/auth/pages/login.component.vue";
import RegisterComponent from "../public/auth/pages/register.component.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/login',    component: LoginComponent, meta: { title: 'Login' } },
        { path: '/register', component: RegisterComponent, meta: { title: 'Register' } },
        { path: '/home', component: HomeComponent, meta: { title: 'Home' } },
        { path: '/about', component: AboutComponent, meta: { title: 'About us' } },
    ],
});

/**
 * Set Business name as prefix for each page title
 */
router.beforeEach((to, from, next) => {
    let baseTitle = 'Green Plot Share';
    document.title = `${baseTitle} | ${to.meta['title']}`;
    next();
});

export default router;
