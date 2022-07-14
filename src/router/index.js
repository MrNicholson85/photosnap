import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Stories from '../views/Stories.vue'
import Pricing from '../views/Pricing.vue'
import Features from '../views/Features.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/stories',
    name: 'Stories',
    component: Stories
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: Pricing
  },
  {
    path: '/features',
    name: 'Features',
    component: Features
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
