import MovieCreate from '../components/movies/MovieCreate'
import MovieDetails from '../components/movies/MovieDetails'
import MovieList from '../components/movies/MovieList'
import Tickets from '../components/movies/Tickets'

export default [
    { path: '/movie-create', name: '/movie-create', component: MovieCreate },
    { path: '/movie-details', name: '/movie-details', component: MovieDetails },
    { path: '/movie-list', name: '/movie-list', component: MovieList },
    { path: '/tickets', name: '/tickets', component: Tickets },
]
