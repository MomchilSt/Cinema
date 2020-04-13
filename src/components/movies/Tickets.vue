<template>
 <v-container class="wrapper">
     <v-card class="card">
      <v-card-title >
        Tickets
        <v-spacer></v-spacer>
      </v-card-title>
      <v-data-table calculate-widths
        :headers="headers"
        :items="ownerTickets"
        hide-default-footer
      ></v-data-table>
    </v-card>
 </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { getAllTickets } from '../../services/ticketService'
export default {
 data () {
    return {
      tickets: null,
      headers: [
        { text: 'Movie',  align: 'start', value: 'title' },
        { text: 'Movie category', value: 'category' },
        { text: 'Cinema', value: 'cinema' },
        { text: 'Projection', value: 'projectionTime' },
        { text: 'Cinema address', value: 'address' },
      ],
      ownerTickets: []
    }
  },
    methods: {
    ...mapActions('ticketService', [getAllTickets]),
  },
    computed: {
    ...mapGetters('ticketService', ['allTickets']),
    ...mapGetters('userService', ['userInfo']),
  },
  async created() {
    await this[getAllTickets]();
    this.tickets = this.allTickets.filter(x => x.ownerId == this.userInfo._id);
    this.tickets.forEach(x => {
      this.ownerTickets.push({title: x.title, category: x.category, cinema: x.cinema, projectionTime: x.projectionTime, address: x.address})
      
    });

 }
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