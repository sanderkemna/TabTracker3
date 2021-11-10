<template>
  <v-container>
    <v-card class="mx-auto my-12" max-width="374">
      <panel title="Login">

        <v-text-field label="Email"
                      v-model="email">
        </v-text-field>
        <br />
        <v-text-field label="Password"
                      type="password"
                      v-model="password">
        </v-text-field>
        <br />
        <v-flex v-html="error" class="error" />
        <br />
        <v-btn depressed
               dark
               @click="login">
          Login
        </v-btn>
      </panel>
    </v-card>
  </v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
 .error{
   text-decoration-color: red;
 }
</style>
