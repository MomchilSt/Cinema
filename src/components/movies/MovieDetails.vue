<template>
 <v-card
      class="card mx-auto"
    >
    <youtube :video-id="videoId"></youtube>
    
    <v-card-title align="center">{{this.title}}</v-card-title>
      <v-card-subtitle class="pb-0">{{this.category}}</v-card-subtitle>
      <v-card-actions>
        <v-btn
            class="mt-4"
            outlined
            color="error"
            text
            @click="deleteMovie({ id: movie._id })"
          >
            Delete
          </v-btn>
        <router-link class="edit pl-5" :to="{ name: '/movie-edit', params: { id: movie._id }}">
          <v-btn class="mt-4"
            outlined
            color="green"
            text>
        Edit
      </v-btn>
    </router-link>
      </v-card-actions>
      <v-card-text id="description"  align="center" class="text--primary">
        <div>{{this.description}}</div>

      </v-card-text>
      <h4>Cinema: {{this.cinema}}</h4>
      <h4>Next projection: {{projection}}</h4>
  
      <v-card-actions class="actions">  
        
        <v-btn class="ticketBtn"
         outlined
         @mouseover="hover1 = true"
         @mouseleave="hover1 = false"
         @click="buyTicket(projection)"
         large color="primary">{{projection}}
         </v-btn>
        <v-btn
         @mouseover="hover2 = true"
         @mouseleave="hover2 = false"
         @click="buyTicket(secondProjection)"
         outlined large color="primary">{{secondProjection}}</v-btn>
        <v-btn
         @mouseover="hover3 = true"
         @mouseleave="hover3 = false"
         @click="buyTicket(thirdProjection)"
         outlined large color="primary">{{thirdProjection}}</v-btn>
      </v-card-actions>
      <v-alert class="mt-5"
        v-if="hover1"
        dense
        text
        type="success"
      >
        Buy ticket for {{projection}} projection which costs 12 BGN
      </v-alert>
      <v-alert class="mt-5"
        v-if="hover2"
        dense
        text
        type="success"
      >
        Buy ticket for {{secondProjection}} projection which costs 12 BGN
      </v-alert>
      <v-alert class="mt-5"
        v-if="hover3"
        dense
        text
        type="success"
      >
        Buy ticket for {{thirdProjection}} projection which costs 12 BGN
      </v-alert>
      <!-- <v-btn @click="test">sadsa</v-btn> -->
      <!-- <v-btn large color="primary">Buy ticket</v-btn> -->
      <v-divider></v-divider>
      <v-card-subtitle class="pb-0">Get your tickets now!</v-card-subtitle>
    </v-card>
</template>

<script>
import { getIdFromURL } from '../../../node_modules/vue-youtube-embed'
import moment from '../../../node_modules/moment/moment'
import { mapActions, mapGetters } from 'vuex'
import { getAllCinemas } from '../../services/cinemaService' //asdsadas
import { getAllMovies, removeMovie } from '../../services/movieService'
import { buyTicket } from '../../services/ticketService'

export default {
    data() {
        return {
            id: null,
            movie: null,
            title: null,
            description: null,
            category: null,
            cinema : null,
            address: null,
            hover1: false,
            hover2: false,
            hover3: false,
            videoId: null,
            projection: new moment().add(1, 'hour').format('LT'),
            secondProjection: new moment().add(2, 'hour').format('LT'),
            thirdProjection: new moment().add(3, 'hour').format('LT'),
        }
    },
  methods: {
    ...mapActions('movieService', [getAllMovies, removeMovie]),
    ...mapActions('ticketService', [buyTicket]),
    ...mapActions('cinemaService', [getAllCinemas]),
    deleteMovie(id) {
      this[removeMovie](id);
      this.$toast.success('Movie Deleted!');
    },
    async buyTicket(projection) {
      try {
        await this[buyTicket]({
          ownerId : this.userInfo._id,
          projectionTime : projection,
          title: this.title,
          category: this.category,
          cinema: this.cinema,
          address: this.allCinemas.filter(x => x.name == this.movie.cinema)[0].address
        })
        this.$toast.success('Ticket Purchased!');
      } catch(err) {
        this.$toast.error(`Error occurred! ${err}`);
      }
    }
  },
    computed: {
    ...mapGetters('movieService', ['allMovies']),
    ...mapGetters('userService', ['userInfo']),
    ...mapGetters('cinemaService', ['allCinemas']),
  },
  async created() {
    await this[getAllMovies]();
    await this[getAllCinemas]();
    this.movie = this.allMovies.filter(x => x._id == this.$route.params.id)[0];
    this.id = this.movie._id;
    this.title = this.movie.title;
    this.description = this.movie.description;
    this.category = this.movie.category;
    this.cinema = this.movie.cinema;
    this.videoId = getIdFromURL(this.movie.trailerLink);
  }
}
</script>

<style scoped>
.edit{
  text-decoration: none;
}
.v-btn:hover {
      background-color: white;
    }
.v-alert {
  width: 600px;
}
.actions {
    padding-top: 15px;
}
#description {
    padding-top: 20px;
}
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  border-radius: 0.5em;
  box-shadow: 0 0 1em white;
  padding: 40px 50px;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>