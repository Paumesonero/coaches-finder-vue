import { createRouter, createWebHistory } from "vue-router";
import CoachesList from './views/coaches/CoachesList.vue'
import CoachDetails from './views/coaches/CoachDetails.vue'
import CoachRegistration from './views/coaches/CoachRegistration.vue'
import ContactCoach from './views/request/ContactCoach.vue'
import RequestReceived from './views/request/RequestReceived.vue'
import NotFound from './views/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),

    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: CoachesList },
        {
            path: '/coaches/:id', component: CoachDetails, props: true, children: [
                { path: 'contact', component: ContactCoach } // /coaches/coachId/contact
            ]
        },
        { path: '/register', component: CoachRegistration },
        { path: '/requests', component: RequestReceived },
        { path: '/:notFound(.*)', component: NotFound },
    ],
})

export default router