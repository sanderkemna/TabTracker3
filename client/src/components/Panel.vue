<template>
  <div>

    <v-toolbar flat dark dense>
      <v-toolbar-title>
        {{title}}
      </v-toolbar-title>
      <slot name="action" />
    </v-toolbar>

    <v-card class="pl-4 pr-4 pt-2 pb-2">
      <slot>
        No slot content defined.
      </slot>
    </v-card>

  </div>
</template>

<script>

export default {
  props: [
    'title'
  ]
}
</script>

<style scoped>
</style>
