import MovieCreate from '../components/movies/MovieCreate'
import MovieDetails from '../components/movies/MovieDetails'
import MovieList from '../components/movies/MovieList'
import Tickets from '../components/movies/Tickets'
import { authGuard, adminGuard } from '../services/guards/guards'

export default [
    { path: '/movie-create', name: '/movie-create', component: MovieCreate, beforeEnter: adminGuard },
    { path: '/movie-details', name: '/movie-details', component: MovieDetails, beforeEnter: authGuard },
    { path: '/movie-list', name: '/movie-list', component: MovieList, beforeEnter: authGuard},
    { path: '/tickets', name: '/tickets', component: Tickets, beforeEnter: authGuard },
]
