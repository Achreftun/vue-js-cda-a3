// fichier de mapping (route, composant)

import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue"
import ReactiveValue from "../views/ReactiveValue.vue"
import PrimeurView from "../views/PrimeurView.vue"
import PaysView from "../views/PaysView.vue"
import AdresseView from "../views/AdresseView.vue"
import PersonneView from "../views/PersonneView.vue"
import PersonneDetails from "../views/PersonneDetails.vue"

const routes = [
    {
        path: '/',
        component: HomeView,
        name: 'home'
    },
    {
        path: '/about',
        component: AboutView,
        name: 'about'
    },
    {
        path: '/reactive',
        component: ReactiveValue,
        name: 'reactive'
    },
    {
        path: '/primeur',
        component: PrimeurView,
        name: 'primeur'
    },
    {
        path: '/pays',
        component: PaysView,
        name: 'pays'
    },
    {
        path: '/adresse',
        component: AdresseView,
        name: 'adresse'
    },
    {
        path: '/personne',
        component: PersonneView,
        name: 'personne'
    },
    {
        path: '/personne/:id',
        component: PersonneDetails,
        name: 'personne-details',
        props: true
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router