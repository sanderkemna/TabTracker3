<template>
    <v-container>
      <v-layout>
        <v-flex xs6>
          <song-metadata :song="song" />
        </v-flex>

        <v-flex xs6 class="ml-4">
          <youtube :youtubeId="song.youtubeId" />
        </v-flex>
      </v-layout>

      <v-layout class="mt-2">
        <v-flex xs6>
          <tab :song="song" />

        </v-flex>
        <v-flex xs6 class="ml-4">
          <lyrics :song="song" />

        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
import SongsService from '@/services/SongsService'
import SongMetadata from './SongMetadata'
import Youtube from './Youtube'
import Lyrics from './Lyrics'
import Tab from './Tab'

export default {
  components: {
    SongMetadata,
    Youtube,
    Lyrics,
    Tab
  },
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  }
}
</script>

<style scoped>

  textarea{
    width: 100%;
    font-family: monospace;
    border: none;
    height: 600px;
    border-style: none;
    border-color: transparent;
    overflow: auto;
    padding: 40px;
  }
</style>
