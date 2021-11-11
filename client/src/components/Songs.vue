<template>
  <v-container>
    <v-card class="mx-auto my-12">
      <panel title="Songs">
        <v-btn fab
               slot="action"
               light
               to="/songs/create"
               medium
               absolute
               right
               middle>
          <v-icon>mdi-plus-circle-outline</v-icon>
        </v-btn>
        <div
             v-for="song in songs"
             :key="song.id">
          {{song.title}}
          {{song.artist}}
          {{song.album}}
        </div>
      </panel>
    </v-card>
  </v-container>
</template>

<script>
import SongsService from '@/services/SongsService'
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
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
}
</script>

<style scoped>

</style>
