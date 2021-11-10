<template>
  <v-toolbar fixed dark>
    <v-toolbar-items class="mr-4">
      <v-btn to="/" elevation="0">
          TabTracker
      </v-btn>
    </v-toolbar-items>

    <!--<v-toolbar-items>
      <v-btn elevation="0">
        Browse
      </v-btn>
    </v-toolbar-items>-->

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn to="login" v-if="!$store.state.isUserLoggedIn" elevation="0">
          Login
      </v-btn>

      <v-btn to="register" v-if="!$store.state.isUserLoggedIn" elevation="0">
          Sign Up
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
