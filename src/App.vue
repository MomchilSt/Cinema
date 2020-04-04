<template>
  <v-app id="app">
    <Navbar id="nav" />
    <v-content>
      <router-view />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
export default {
      components: {
        Navbar,
        Footer
    }
}
</script>

<style>
</style>
