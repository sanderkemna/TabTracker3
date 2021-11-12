<template>
  <v-container>
    <v-card class="mx-auto my-12">
      <songs-search-panel />
      <songs-panel />
    </v-card>
  </v-container>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
import SongsPanel from './SongsPanel'

export default {
  components: {
    Panel,
    SongsPanel
  },
  data () {
    return {
      songs: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
}
</script>

<style scoped>
.song{
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
  .song-title {
    font-size: 30px;
  }
  .song-artist {
    font-size: 24px;
  }
  .song-genre {
    font-size: 18px;
  }
  .album-image {
    width: 40%;
    margin: 0 auto;
  }

</style>
