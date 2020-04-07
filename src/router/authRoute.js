import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import { innerGuard } from '../services/guards/guards'

export default [
    { path: '/login', name: 'login', component: Login, beforeEnter: innerGuard },
    { path: '/register', name: 'register', component: Register, beforeEnter: innerGuard }
]
