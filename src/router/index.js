import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import authRoute from './authRoute'
import moviesRoute from './moviesRoute'
import cinemasRoute from './cinemasRoute'
import NotFound from '../components/common/NotFound'
import Profile from '../components/user/Profile'

Vue.use(VueRouter)

const appRoutes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '*',
    name: 'page-not-found',
    component: NotFound
}
]

const routes = [...appRoutes, ...authRoute, ...moviesRoute, ...cinemasRoute];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
