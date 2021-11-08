<template>
  <v-toolbar fixed dark>
    <v-toolbar-title>
      TabTracker
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn elevation="0">
        Browse
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <!--<router-link to="login" class="cyan">Log In</router-link>-->
      <v-btn elevation="0">
        <router-link to="register">
          Sign Up
        </router-link>
      </v-btn>

    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
