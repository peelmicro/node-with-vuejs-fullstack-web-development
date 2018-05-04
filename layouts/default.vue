<template>
  <v-app>
    <v-content>
      <v-toolbar app class="mt-2 ml-2 mr-2">
        <v-toolbar-title>
          <router-link 
            :to="userIsAuthenticated ? '/surveys' : '/'" 
            tag="span" 
            style="cursor: pointer"
          >Emaily</router-link>
        </v-toolbar-title>      
        <v-spacer></v-spacer>
        <v-toolbar-items v-if="userIsAuthenticated">
          <Payments />
          <v-layout row align-center>Credits: {{auth.credits}}</v-layout>
          <v-btn flat href='/api/logout'>
            <v-icon left>exit_to_app</v-icon>
            Logout
          </v-btn>
        </v-toolbar-items>     
        <v-toolbar-items v-else>
          <v-btn flat href='/auth/google/'>
            <v-icon left>lock_open</v-icon>
            Login with Google
          </v-btn>          
        </v-toolbar-items>     
      </v-toolbar>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Payments from '@/components/Payments'
export default {
  components: {
    Payments
  },
  computed: {
    userIsAuthenticated () {
      return this.$store.getters.userIsAuthenticated
    },
    auth () {
      return this.$store.getters.auth
    }
  }
}
</script>
