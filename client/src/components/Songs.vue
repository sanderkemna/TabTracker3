<template>
  <v-container>
    <v-card class="mx-auto my-12">
      <panel title="Songs">

        <div v-for="song in songs"
             :key="song.title">
          {{song.title}}
          {{song.artist}}
          {{song.album}}
        </div>

      </panel>
    </v-card>
  </v-container>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  mounted() {
    // do a request to the backend for all the songs
  }
}
</script>

<style scoped>

</style>
