<template>
  <div>
    <!-- <div 
    v-for="movie in allMovies"
    :key="movie._id"
    >
      <div>{{movie.title}}</div>
    </div> -->

     <div 
    v-for="cinema in allCinemas"
    :key="cinema._id"
    >
      <div>{{cinema.name}}</div>
    </div>
  </div>
</template>

<script>
//import { http } from '../services/httpClient'
import { mapActions, mapGetters } from 'vuex'
//import { getAllMovies } from '../services/movieService'
import { getAllCinemas } from '../services/cinemaService'
export default {
  methods: {
    //...mapActions('movieService', [getAllMovies]),
    ...mapActions('cinemaService', [getAllCinemas]),
  },
  computed: {
    //...mapGetters('movieService', ['allMovies']),
    ...mapGetters('cinemaService', ['getAllCinemas']),
  },
   created() {
    //this[getAllMovies]();
    this[getAllCinemas]();
 }
}
</script>

<style>

</style>