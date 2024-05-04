/**
 * Vue Router
 * @description: Vue Router configuration
 * @docs: https://router.vuejs.org/
 */

import {createRouter, createWebHistory} from "vue-router";
import HomeComponent from "../public/pages/home.component.vue";
import AboutComponent from "../public/pages/about.component.vue";
import LoginComponent from "../authentication/pages/login.component.vue";
import RegisterComponent from "../authentication/pages/register.component.vue";
import {UserApiService} from "../authentication/services/users-api.service.js";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/login', name: 'login',  component: LoginComponent, meta: { title: 'Login' } },
        {path: '/', redirect: 'login'},
        { path: '/register', component: RegisterComponent, meta: { title: 'Register' } },
        { path: '/home', component: HomeComponent, meta: { title: 'Home',requiresAuth: true },},
        { path: '/about', component: AboutComponent, meta: { title: 'About us', requiresAuth: true } },
    ],
});

const userService = new UserApiService();

/**
 * Set Business name as prefix for each page title
 */

function validateAuthenticationOfPresentUser(){
    try {
        var presentUser = JSON.parse(localStorage.getItem('user'));
        if (presentUser) {return true}
        else {return false}
    } catch (error) {
        console.error("Error logging in:", error);
    }
}

router.beforeEach((to, from, next) => {

    if (to.path === '/login') {
        localStorage.clear();
    }

    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const isAuthenticated = validateAuthenticationOfPresentUser()
    if (requiresAuth && !isAuthenticated) {
        next('/login');
    } else {
        next();
    }



    let baseTitle = 'Green Plot Share';
    document.title = `${baseTitle} | ${to.meta['title']}`;
    next();
});

export default router;
