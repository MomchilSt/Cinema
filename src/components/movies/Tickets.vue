<template>
 <v-container class="wrapper">
     <v-card class="card">
      <v-card-title >
        Tickets
        <v-spacer></v-spacer>
      </v-card-title>
      <v-data-table calculate-widths
        :headers="headers"
        :items="desserts"
        hide-default-footer
      ></v-data-table>
    </v-card>
 </v-container>
</template>

<script>
export default {
 data () {
    return {
      headers: [
        {
          text: 'Movie',
          align: 'start',
          value: 'name',
        },
        { text: 'Cinema', value: 'calories' },
        { text: 'Projection', value: 'fat' },
        { text: 'Price', value: 'carbs' }
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67
        },
      ],
    }
  },
}
</script>

<style>
.v-data-table {
    max-width: 500;
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
  border-radius: 0.5em;
  box-shadow: 0 0 1em white;
  padding: 40px 50px;
  margin-top: 20px;
}
</style>