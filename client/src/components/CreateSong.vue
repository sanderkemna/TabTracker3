<template>
    <v-container>
      <v-layout>
        <v-flex xs4>
          <panel title="Song Metadata">

            <v-text-field label="Title"
                          :rules="[rules.required]"
                          v-model="song.title">
            </v-text-field>

            <v-text-field label="Artist"
                          :rules="[rules.required]"
                          v-model="song.artist">
            </v-text-field>

            <v-text-field label="Genre"
                          :rules="[rules.required]"
                          v-model="song.genre">
            </v-text-field>

            <v-text-field label="Album"
                          :rules="[rules.required]"
                          v-model="song.album">
            </v-text-field>

            <v-text-field label="Album Image Url"
                          :rules="[rules.required]"
                          v-model="song.albumImageURL">
            </v-text-field>

            <v-text-field label="Youtube Id"
                          :rules="[rules.required]"
                          v-model="song.youtubeId">
            </v-text-field>
          </panel>

        </v-flex>
        <v-flex xs8>
          <panel title="Song structure" class="ml-4">
            <v-textarea label="Tab"
                        :rules="[rules.required]"
                        v-model="song.tab">
            </v-textarea>

            <v-textarea label="Lyrics"
                        :rules="[rules.required]"
                        v-model="song.lyrics">
            </v-textarea>
          </panel>
          <div class="red-alert" v-if="error">
            {{error}}
          </div>
          <!--to="/songs"-->

          <v-btn dark
                 @click="create">
            Create Song
          </v-btn>

        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageURL: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      rules: {
        required: value => !!value || 'Required.'
      }
    }
  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledin = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledin) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>

</style>
