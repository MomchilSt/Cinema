import CinemaCreate from '../components/cinema/CinemaCreate'
import { adminGuard } from '../services/guards/guards'

export default [
    { path: '/cinema-create', name: '/cinema-create', component: CinemaCreate, beforeEnter: adminGuard },
]
