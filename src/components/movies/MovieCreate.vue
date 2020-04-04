<template>
<div class="wrraper">
    <v-row align="center" class="card">
      <h2>Create movie</h2>
      <v-form @submit.prevent="createMovie" ref="createMovieForm" v-model="valid">
        <v-text-field v-model="title" :rules="titleRules" label="Title" required></v-text-field>
        <v-textarea
        v-model="description"
        :rules="descriptionRules"
         required>
          <template v-slot:label>
            <div>
              Add brief description
            </div>
          </template>
        </v-textarea>


        <v-container class="row">
            <v-select class="col-6"
              v-model="select"
              :items="cinemas"
              :rules="[v => !!v || 'Cinema is required']"
              label="Cinema"
              required
            ></v-select> 
            
            <v-select class="col-6"
              v-model="select"
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
          @click="validate"
          class="mr-4"
           width="420">Create movie</v-btn>
        </v-container>        
      </v-form>
    </v-row>
  </div>
</template>

<script>
export default {
    valid: true,
    data() {
        return {
            title: "",
            titleRules: [
                v => !!v || "Title is required!"
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
            categories: ["Action", "Comedy", "Fantasy"],
            cinemas: ["Cinemax", "Arena", "Cinegrand"]
        }
    },
     validate() {
      if (this.$refs.registerForm.validate()) {
        this.snackbar = true;
      }
    },
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