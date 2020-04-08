<template>
  <div>
    <div 
    v-for="movie in allMovies"
    :key="movie._id"
    >
      <div>{{movie.title}}</div>
    </div>
  </div>
</template>

<script>
//import { http } from '../services/httpClient'
import { mapActions, mapGetters } from 'vuex'
import { getAllMovies } from '../services/movieService'
export default {
  methods: {
    ...mapActions('movieService', [getAllMovies]),
  },
  computed: {
    ...mapGetters('movieService', ['allMovies']),
  },
   created() {
    this[getAllMovies]();
 }
}
</script>

<style>

</style>