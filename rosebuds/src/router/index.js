import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }
  // path: '/',
  // name: 'about',
  // component: AboutView
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
