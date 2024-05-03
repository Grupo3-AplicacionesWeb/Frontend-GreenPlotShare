import {createRouter, createWebHistory} from "vue-router";

import Home from "../public/pages/home.component.vue"
import About from "../public/pages/about.component.vue"
import agriculturalLandComponent from "../public/agricultural-land/pages/agriculturalLand.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/agricultural-land', component: agriculturalLandComponent, meta:{title: 'Agricultural Land'}},
        {path:'/Home', component: Home, meta:{title: 'Home'}},
        {path:'/About', component: About, meta:{title: 'About'}},
    ]
})

router.beforeEach((to, from, next) => {
    let baseTitle = 'Green Plot Share';
    document.title = `${baseTitle} | ${to.meta['title']}`;
    next();
});

export default router;