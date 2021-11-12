<template>
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
          :key="song.id"
          class="song">
      <v-layout>
        <v-flex xs6>
          <div class="song-title">
            {{song.title}}
          </div>
          <div class="song-artist">
            {{song.artist}}
          </div>
          <div class="song-genre">
            {{song.genre}}
          </div>
          <v-btn dark
                  @click="navigateTo({
                    name: 'song',
                    params: {
                      songId: song.id
                    }
                  })">
                View
          </v-btn>
        </v-flex>
        <v-flex xs6>
          <img class="album-image" :src="song.albumImageURL" />
        </v-flex>
      </v-layout>
    </div>
  </panel>
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
