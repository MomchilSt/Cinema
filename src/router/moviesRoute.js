import MovieCreate from '../components/movies/MovieCreate'
import MovieDetails from '../components/movies/MovieDetails'
import MovieList from '../components/movies/MovieList'
import MovieEdit from '../components/movies/MovieEdit'
import Tickets from '../components/movies/Tickets'
import { authGuard, adminGuard } from '../services/guards/guards'
import NotFound from '../components/common/NotFound'

export default [
    { path: '/movie-create', name: '/movie-create', component: MovieCreate, beforeEnter: adminGuard },
    { path: '/movie-details/:id', name: '/movie-details', component: MovieDetails, beforeEnter: authGuard },
    { path: '/movie-edit/:id', name: '/movie-edit', component: MovieEdit, beforeEnter: authGuard },
    { path: '/movie-list', name: '/movie-list', component: MovieList, beforeEnter: authGuard},
    { path: '/tickets', name: '/tickets', component: Tickets, beforeEnter: authGuard },
    {
        path: '*',
        name: 'page-not-found',
        component: NotFound
    }
]
