<template>
  <panel title="Tab">
    <v-layout>
      <v-textarea
                  class="tab"
                  auto-grow
                  readonly
                  v-model="song.tab">
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
  .tab {
    width: 100%;
    font-family: monospace;
    border: none;
    border-style: none;
    border-color: transparent;
    overflow: auto;
    padding: 40px;
  }
</style>
