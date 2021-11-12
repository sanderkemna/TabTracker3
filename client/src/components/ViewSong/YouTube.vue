<template>
  <panel title="Youtube Video">
    <youtube
             :video-id="youtubeId"
             :player-width="500"
             :player-height="200">
    </youtube>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
import VueYouTubeEmbed from 'vue-youtube-embed'

export default {
  components: {
    Panel,
    VueYouTubeEmbed
  },
  props: [
    'youtubeId'
  ]
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
    width: 50%;
    margin: 0 auto;
  }
</style>
