<template>
  <v-app-bar class="navbar" app color="primary" dark height="85">
    <router-link to="/home">
      <v-btn id="title" text>
        <h3>Cinema</h3>
      </v-btn>
    </router-link>

    <v-spacer></v-spacer>
    <router-link to="/movie-list"
    v-if="isAuth">
      <v-btn text>
        <v-icon>local_movies</v-icon>
        <span class="mr-2">Movies</span>
      </v-btn>
    </router-link>
    <router-link to="/movie-list"
    v-if="isAuth">
      <v-btn text>
        <v-icon>movie</v-icon>
        <span class="mr-2">Cinemas</span>
      </v-btn>
    </router-link>
        <router-link to="/tickets"
        v-if="isAuth">
        <v-btn text>
        <v-icon>library_books</v-icon>
        <span class="mr-2">My Tickets</span>
        </v-btn>
    </router-link>
    <router-link to="/movie-create"
    v-if="isAdmin && isAuth">
      <v-btn text>
        <v-icon>add_circle</v-icon>
        <span class="mr-2">Create Movie</span>
      </v-btn>
    </router-link>
    <router-link to="/cinema-create"
    v-if="isAdmin && isAuth">
      <v-btn text>
        <v-icon>add_location</v-icon>
        <span class="mr-2">Create Cinema</span>
      </v-btn>
    </router-link>
    <router-link to="/profile"
    v-if="isAuth">
        <v-btn text>
          <v-icon>account_circle</v-icon>
        <span class="mr-2">Profile</span>
      </v-btn>
    </router-link>
    <v-btn text @click="logout"
    v-if="isAuth">
        <v-icon>cancel</v-icon>
        <span class="mr-2">Logout</span>
      </v-btn>
    <router-link to="/login"
    v-if="!isAuth">
      <v-btn text>
        <v-icon>person_pin</v-icon>
        <span class="mr-2">Login</span>
      </v-btn>
    </router-link>
    <router-link to="/register"
    v-if="!isAuth">
      <v-btn text>
        <v-icon>perm_identity</v-icon>
        <span class="mr-2">Register</span>
      </v-btn>
    </router-link>
  </v-app-bar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { logout } from '../../services/authService'
export default {
  computed: {
    ...mapGetters(['isAuth']),
    ...mapGetters(['isAdmin']),
  },
  methods: {
    ...mapActions([logout]),
    logout() {
      this[logout]();
      this.$router.push('/');
      this.$toast.success('Successfully logouted out!');
    },
  }
}
</script>

<style scoped>

</style>