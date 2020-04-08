<template>
<v-jumbotron color="lighten-2" align="center">
  <v-container fill-height>
    <v-layout align-center>
      <v-flex>
        <h3 class="display-3">Welcome to our Cinema!</h3>
        <span class="subheading">Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.</span>
        <v-divider class="my-3"></v-divider>
        <div class="title mb-3">Check our newest movies!</div>
        <router-link to="/login" v-if="!isAuth">
        <v-btn large color="primary" class="mx-0">Login</v-btn>
        </router-link>
        <div class="text mt-5" align="center" v-if="!isAuth">
        Don't have an account?
        <router-link to="/register">Register</router-link>
      </div>
      <router-link to="/movie-list" v-if="isAuth">
        <v-btn large color="primary" class="mx-0">Movies</v-btn>
        </router-link>
      </v-flex>
    </v-layout>
  </v-container>
</v-jumbotron>
</template>

<script>
//import { http } from '../services/httpClient'
//import { mapActions, mapGetters } from 'vuex'
//import { getAllMovies } from '../services/movieService'
import { mapGetters } from 'vuex'
export default {
  methods: {
    //...mapActions('movieService', [getAllMovies]),
  },
  computed: {
    ...mapGetters(['isAuth']),
    //...mapGetters('movieService', ['allMovies']),
  },
   created() {
    //this[getAllMovies]();
 }
}
</script>

<style>

</style>