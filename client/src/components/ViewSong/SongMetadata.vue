<template>
  <panel title="Song Metadata">
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
               :to="{
            name: 'song-edit',
            params () {
               return {
                songId: song.id
              }
            }
          }">
          Edit
        </v-btn>

        <v-btn dark
               v-if="isUserLoggedIn && !isBookmarked"
               @click="bookmark">
          Bookmark
        </v-btn>

        <v-btn dark
               v-if="isUserLoggedIn && isBookmarked"
               @click="unbookmark">
          Unbookmark
        </v-btn>

      </v-flex>

      <v-flex xs4>
        <img class="album-image" :src="song.albumImageURL" />
        <br />
        {{song.album}}
      </v-flex>

    </v-layout>
  </panel>
</template>

<script>
import { mapState } from 'vuex'
import BookmarksService from '@/services/BookmarksService'

export default {
  props: [
    'song'
  ],
  data () {
    return {
      isBookmarked: false
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  async mounted () {
    const bookmark = (await BookmarksService.index({
      songId: 1,
      userId: 10
    })).data
    this.isBookmarked = !! bookmark
    console.log('bookmark', this.isBookmarked)
  },
  methods: {
    bookmark () {
      console.log('bookmark')
    },
    unbookmark () {
      console.log('unbookmark')
    }
  }
}
</script>

<style scoped>

  .song {
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
    width: 60%;
    margin: 0 auto;
  }
</style>
