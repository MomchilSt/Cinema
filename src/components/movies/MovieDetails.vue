<template>
 <v-card
      class="card mx-auto"
    >
    <youtube :video-id="videoId" @ready="ready" @playing="playing"></youtube>
    
    <v-card-title align="center">Man of steel</v-card-title>
      <v-card-subtitle class="pb-0">Action</v-card-subtitle>
  
      <v-card-text id="description"  align="center" class="text--primary">
        <div>An alien child is evacuated from his dying world and sent to Earth to live among humans. His peace is threatened, when survivors of his home planet invade Earth.</div>

      </v-card-text>
      <h4>Cinema: Arena</h4>
      <h4>Next projection: {{projection}}</h4>
  
      <v-card-actions class="actions">  
        
        <v-btn class="ticketBtn"
         outlined
         @mouseover="hover1 = true"
         @mouseleave="hover1 = false"
         large color="primary">{{projection}}
         </v-btn>
        <v-btn
         @mouseover="hover2 = true"
         @mouseleave="hover2 = false"
         outlined large color="primary">{{secondProjection}}</v-btn>
        <v-btn
         @mouseover="hover3 = true"
         @mouseleave="hover3 = false"
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
      <!-- <v-btn large color="primary">Buy ticket</v-btn> -->
      <v-divider></v-divider>
      <v-card-subtitle class="pb-0">Get your tickets now!</v-card-subtitle>
    </v-card>
</template>

<script>
import { getIdFromURL } from '../../../node_modules/vue-youtube-embed'
import moment from '../../../node_modules/moment/moment'

export default {
    data() {
        return {
            hover1: false,
            hover2: false,
            hover3: false,
            videoId: getIdFromURL("https://www.youtube.com/watch?v=T6DJcgm3wNY"),
            projection: new moment().add(1, 'hour').format('LT'),
            secondProjection: new moment().add(2, 'hour').format('LT'),
            thirdProjection: new moment().add(3, 'hour').format('LT')
        }
    },
}
</script>

<style scoped>
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