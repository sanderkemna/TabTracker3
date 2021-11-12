<template>
  <panel title="Tab">
    <v-layout>
      <v-textarea
                  auto-grow
                  readonly
                  v-model="song.tab">
      </v-textarea>
    </v-layout>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  components: {
    Panel
  },
  props: [
    'song'
  ]
}
</script>

<style scoped>
  textarea {
    width: 100%;
    font-family: "Roboto Mono", "Courier New", monospace;
    border: none;
    height: 600px;
    border-style: none;
    border-color: transparent;
    overflow: auto;
    padding: 40px;
  }
</style>
