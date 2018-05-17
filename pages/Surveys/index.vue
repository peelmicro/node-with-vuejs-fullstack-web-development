<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h2>Campaigns</h2>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-layout 
          row
          v-for="survey in orderBy(surveys, 'dateSent', -1)"
          :key="survey._id"     
          class="mb-2"      
        >
          <v-flex xs12>
            <v-card>
              <v-card-title primary-title>
                <h5>{{survey.title}}</h5>
              </v-card-title>
              <v-card-text>
                <p class="grey--text">{{survey.body}}</p>
                <p class="text-xs-right caption">On date: {{new Date(survey.dateSent).toLocaleDateString()}}</p>
              </v-card-text> 
              <v-card-actions>
                <p class="blue--text darken-1">Yes: {{survey.yes}}</p>
                <p class="blue--text darken-1">No: {{survey.no}}</p>                
              </v-card-actions>              
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>   
    </v-layout>    
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>       
        <v-alert type="error" dismissible v-model="error">
          {{errorMessage}}
        </v-alert>
      </v-flex>
    </v-layout>     
    <v-layout row>
      <v-flex xs12>
        <v-btn
          fixed
          dark
          fab
          bottom
          right
          color="red"
          to='/surveys/new'
        >
          <v-icon>add</v-icon>
        </v-btn> 
      </v-flex>
    </v-layout>        
  </v-container>
</template>

<script>
export default {
  async asyncData ({ store }) {
    await store.dispatch('fetchSurveys')
  },
  computed: {
    errorMessage: {
      get () {
        return this.$store.getters.errorMessage
      },
      set (newValue) {
        this.$store.commit('setErrorMessage', newValue)
      }
    },
    loading () {
      return this.$store.getters.loading
    },
    error: {
      get () {
        return !!this.errorMessage
      },
      set (newValue) {
        this.$store.commit('setErrorMessage', '')
      }
    },
    surveys () {
      return this.$store.getters.surveys
    }
  }
}
</script>

