<template>
  <panel title="Lyrics">
    <v-layout>
      <v-textarea
                  auto-grow
                  readonly
                  v-model="song.lyrics">
      </v-textarea>
    </v-layout>
  </panel>
</template>

<script>

export default {
  props: [
    'song'
  ]
}
</script>

<style scoped>
  textarea {
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
