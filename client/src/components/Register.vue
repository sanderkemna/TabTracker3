<template>
  <v-container>
    <v-card class="mx-auto my-12" max-width="374">
      <panel title="Register">
        <form name="tab-tracker-form">
          <v-text-field label="Email"
                        v-model="email">
          </v-text-field>
          <br />
          <v-text-field label="Password"
                        type="password"
                        autocomplete="new-password"
                        v-model="password">
          </v-text-field>
        </form>
        <br />
        <v-flex v-html="error" class="error" />
        <br />
        <v-btn depressed
               dark
               @click="register">
          Register
        </v-btn>
      </panel>
    </v-card>
  </v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
 .error{
   text-decoration-color: red;
 }
</style>
