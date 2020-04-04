<template>
<div class="wrraper">
    <v-row align="center" class="card">
      <h2>Create cinema</h2>
      <v-form @submit.prevent="createCinema" ref="createCinemaForm" v-model="valid">
        <v-text-field v-model="name" :rules="nameRules" label="Name" required></v-text-field>
        <v-text-field v-model="address" :rules="addressRules" label="Address" required></v-text-field>

        <v-text-field 
        v-model="cinemaImg"
        :rules="cinemaImgRules"
         required
         >
          <template v-slot:label>
            Add cinema img link here? <v-icon style="vertical-align: middle">find_in_page</v-icon>
          </template>
        </v-text-field>

        <v-divider></v-divider>
        <v-container class="d-flex justify-content-between actions">
          <v-btn
          type="submit"
          :disabled="!valid"
          color="success"
          @click="validate"
          class="mr-4"
           width="420">Create cinema</v-btn>
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
            name: "",
            nameRules: [
                v => !!v || "Name is required!",
                v => (v && v.length >= 3) || "Name must be atleast than 3 characters"

            ],
            address: "",
            addressRules: [
                v => !!v || "Address is required!",
                v => (v && v.length >= 3) || "Address must be atleast than 3 characters"
            ],
            cinemaImg: "",
            cinemaImgRules: [
                v => !!v || "Poster is required!"
            ]
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
  padding-top: 10px;
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