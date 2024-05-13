import {createRouter, createWebHistory} from 'vue-router';

import ModelPage from "@/components/ModelPage.vue";
import DescriptionPage from "@/components/DescriptionPage.vue";
import NewsPage from "@/components/NewsPage.vue";
import HistoryPage from "@/components/HistoryPage.vue";

const routes = [
    {
        path: '/',
        component: ModelPage
    },
    {
        path: '/about',
        component: DescriptionPage
    },
    {
        path: '/news',
        component: NewsPage
    },
    {
        path: '/history',
        component: HistoryPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;