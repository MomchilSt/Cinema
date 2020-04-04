<template>
  <v-app-bar class="navbar" app color="primary" dark height="85">
    <router-link to="/">
      <v-btn id="title" text>
        <h3>Cinema</h3>
      </v-btn>
    </router-link>

    <v-spacer></v-spacer>
    <router-link to="/profile">
        <v-btn text>
          <v-icon>account_circle</v-icon>
        <span class="mr-2">Profile</span>
      </v-btn>
    </router-link>
    <router-link to="/movie-list">
      <v-btn text>
        <v-icon>local_movies</v-icon>
        <span class="mr-2">Movies</span>
      </v-btn>
    </router-link>
    <router-link to="/movie-list">
      <v-btn text>
        <v-icon>movie</v-icon>
        <span class="mr-2">Cinemas</span>
      </v-btn>
    </router-link>
        <router-link to="/tickets">
        <v-btn text>
        <v-icon>library_books</v-icon>
        <span class="mr-2">My Tickets</span>
        </v-btn>
    </router-link>
    <router-link to="/movie-create">
      <v-btn text>
        <v-icon>add_circle</v-icon>
        <span class="mr-2">Create Movie</span>
      </v-btn>
    </router-link>
    <router-link to="/cinema-create">
      <v-btn text>
        <v-icon>add_location</v-icon>
        <span class="mr-2">Create Cinema</span>
      </v-btn>
    </router-link>
    <router-link to="/logout">
      <v-btn text>
        <v-icon>cancel</v-icon>
        <span class="mr-2">Logout</span>
      </v-btn>
    </router-link>
    <router-link to="/login">
      <v-btn text>
        <v-icon>person_pin</v-icon>
        <span class="mr-2">Login</span>
      </v-btn>
    </router-link>
    <router-link to="/register">
      <v-btn text>
        <v-icon>perm_identity</v-icon>
        <span class="mr-2">Register</span>
      </v-btn>
    </router-link>
  </v-app-bar>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>