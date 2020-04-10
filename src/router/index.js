import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import authRoute from './authRoute'
import moviesRoute from './moviesRoute'
import cinemasRoute from './cinemasRoute'
import Profile from '../components/user/Profile'
import { authGuard } from '../services/guards/guards'

Vue.use(VueRouter)

const appRoutes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    beforeEnter: authGuard
  },

]

const routes = [...appRoutes, ...authRoute, ...moviesRoute, ...cinemasRoute];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
