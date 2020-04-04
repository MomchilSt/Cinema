<template>
  <v-content  fluid grid-list-xl class="wrapper">
    <v-layout wrap justify-space-around>
        <v-card
        outlined
        ripple
        class="card mx-auto"
        max-width="350px"
        max-height="580px"
        >
        <v-img
          contain
          class="white--text align-end"
          max-height="465px"
          src="https://static.posters.cz/image/750/%D0%BF%D0%BB%D0%B0%D0%BA%D0%B0%D1%82/batman-v-superman-dawn-of-justice-superman-i28805.jpg"
        >
        </v-img>
        <v-card-title align="center" class="justify-content-between"><div>Superman</div></v-card-title>    
        <v-card-actions>
        <router-link to="/movie-details">
          <v-btn
            outlined
            color="primary"
            text
          >
            Details
          </v-btn>
        </router-link>
          <v-btn
            outlined
            color="warning"
            text
            elevation="20"
          >
            Edit
          </v-btn>
          <v-btn
            outlined
            color="error"
            text
          >
            Delete
          </v-btn>
        </v-card-actions>
        </v-card>
        <v-card
        outlined
        ripple
        class="card mx-auto"
        max-width="350px"
        max-height="580px"
        >
        <v-img
          contain
          class="white--text align-end"
          max-height="465px"
          src="https://images-na.ssl-images-amazon.com/images/I/8150KG7y2EL.jpg"
        >
        </v-img>
        <v-card-title align="center"><div>Superman</div></v-card-title>    
        <v-card-actions>
          <v-btn
            outlined
            color="primary"
            text
          >
            Details
          </v-btn>
        </v-card-actions>
        </v-card>
        <v-card
        outlined
        ripple
        class="card mx-auto"
        max-width="350px"
        max-height="580px"
        >
        <v-img
          contain
          class="white--text align-end"
          max-height="465px"
          src="https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/268821/4556789/MOVAB45105__51956.1541971172.jpg?c=2&imbypass=on"
        >
        </v-img>
        <v-card-title align="center"><div>Superman</div></v-card-title>    
        <v-card-actions>
          <v-btn
            outlined
            color="primary"
            text
          >
            Details
          </v-btn>
        </v-card-actions>
        </v-card>
        <v-card
        outlined
        ripple
        class="card mx-auto"
        max-width="350px"
        max-height="580px"
        >
        <v-img
          contain
          class="white--text align-end"
          max-height="465px"
          src="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/89058/93685/Joker-2019-Final-Style-steps-Poster-buy-original-movie-posters-at-starstills__62518.1572351165.jpg?c=2?imbypass=on"
        >
        </v-img>
        <v-card-title align="center"><div>Superman</div></v-card-title>    
        <v-card-actions>
          <v-btn
            outlined
            color="primary"
            text
          >
            Details
          </v-btn>
        </v-card-actions>
        </v-card>
    </v-layout>
  </v-content>
</template>

<script>
export default {

}
</script>

<style scoped>
.router-link:hover {
    text-decoration: none !important;
}
.v-content {
    padding-top: 0px !important;
    padding-bottom: 22px !important;
}
.wrraper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.v-card:hover {
  box-shadow: 0 0 1em white;
}
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5em;
  margin-top: 15px;
  padding-bottom: 10px;
}
</style>