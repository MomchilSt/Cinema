<template>
<div class="wrraper">
    <v-row align="center" class="card">
      <h2>Create movie</h2>
      <v-form @submit.prevent="createMovie" ref="createMovieForm" v-model="valid">
        <v-text-field 
        v-model="title"
        :rules="titleRules"
        label="Title"
        required>
        </v-text-field>
        <v-textarea
        v-model="description"
        :rules="descriptionRules"
        label="Description"
        required>
          <template v-slot:label>
            <div>
              Add brief description
            </div>
          </template>
        </v-textarea>


        <v-container class="row">
            <v-select class="col-6"
              v-model="cinema"
              :items="allCinemaNames"
              :rules="[v => !!v || 'Cinema is required']"
              label="Cinema"
              required
            ></v-select> 
            
            <v-select class="col-6"
              v-model="category"
              :items="categories"
              :rules="[v => !!v || 'Category is required']"
              label="Category"
              required
            ></v-select>    
          </v-container>

        <v-text-field 
        v-model="posterImg"
        :rules="posterRules"
        required
         >
          <template v-slot:label>
            Add poster link here? <v-icon style="vertical-align: middle">find_in_page</v-icon>
          </template>
        </v-text-field>

        <v-text-field 
        v-model="trailerLink"
        :rules="trailerRules"
         required>
          <template v-slot:label>
            Add trailer link here? <v-icon style="vertical-align: middle">play_circle_filled</v-icon>
          </template>
        </v-text-field>

        <v-divider></v-divider>
        <v-container class="d-flex justify-content-between actions">
          <v-btn id="createBtn"
          type="submit"
          :disabled="!valid"
          color="success"
          class="mr-4"
           width="420">Create movie</v-btn>
        </v-container>        
      </v-form>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { createMovie } from '../../services/movieService'
import { getAllCinemaNames } from '../../services/cinemaService'
export default {
  data() {
    return {
            valid: true,
            title: "",
            titleRules: [
                v => !!v || "Title is required!", 
                v => (v && v.length >= 3) || "Title must be atleast 3 characters."
            ],
            description: "",
            descriptionRules: [
                v => (v && v.length >= 10) || "Description must be atleast 10 characters."
            ],
            posterImg: "",
            posterRules: [
                v => !!v || "Poster is required!"
            ],
            trailerLink: "",
            trailerRules: [
                v => !!v || "Trailer is required!"
            ],
            cinema: "",
            category: "",
            categories: ["Action", "Comedy", "Fantasy"],
            cinemas: ["Cinemax", "Arena", "Cinegrand"]
        }
    },
    methods: {
       ...mapActions('cinemaService', [getAllCinemaNames]),
       ...mapActions('movieService', [createMovie]),
      async createMovie() {
        try {
          await this[createMovie]({
          title: this.title,
          description: this.description,
          posterImg: this.posterImg,
          trailerLink: this.trailerLink,
          category: this.category,
          cinema: this.cinema
        });
        this.$router.push({ path: '/movie-list' })
        this.$toast.success('Successfully Created Movie!');
        } catch (err) {
          this.$toast.error(`Error occurred! ${err}`);
          this.$refs.registerForm.reset();
        }
    },
  },
  computed: {
    ...mapGetters('cinemaService', ['allCinemaNames']),
  },
  created() {
    this[getAllCinemaNames]()
  }
}
</script>

<style scoped>
#createBtn {
  margin-left: 15px;
}
.actions {
  margin-bottom: 15px;
}
.text {
  margin-top: 20px;
}
.left {
  margin-left: 20px;
}
.wrraper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  border-radius: 0.5em;
  box-shadow: 0 0 1em white;
  padding: 40px 50px;
  margin-top: 20px;
}
h2 {
  margin-bottom: 40px;
}
</style>