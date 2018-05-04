<template>
  <v-layout>
    <v-btn  flat @click.stop="dialog = true">Add Credits</v-btn>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          <div>
            <span class="headline">Emaily</span><br>
          </div>
         </v-card-title>
        <v-card-text>
          <p>$5 for 5 emails credits</p>
          <card class='stripe-card'
            :class='{ complete }'
            :stripe='stripePublishableKey'
            :options='stripeOptions'
            @change='complete = $event.complete'
          />          
        </v-card-text>

        <v-card-actions>
          <v-btn color="primary" flat :disabled='!complete' @click="pay">Purchase</v-btn>
        </v-card-actions>
      </v-card>
      <v-alert type="error" dismissible v-model="error">
        {{errorMessage}}
      </v-alert>    
    </v-dialog>
  </v-layout>
</template>
 
<script>
import { Card, createToken } from 'vue-stripe-elements'
export default {
  data () {
    return {
      stripePublishableKey: process.env.stripePublishableKey,
      dialog: false,
      complete: false,
      error: false,
      errorMessage: '',
      stripeOptions: {
        // see https://stripe.com/docs/stripe.js#element-options for details
      }
    }
  },
  components: { Card },
  methods: {
    async pay () {
      const {token, error} = await createToken()
      if (error) {
        this.error = true
        this.errorMessage = error
        return
      }
      this.$store.dispatch('handleToken', token)
      this.dialog = false
    }
  }
}
</script> 
 
<style scoped>
.stripe-card {
  width: 450px;
  border: 1px solid grey;
}
.stripe-card.complete {
  border-color: green;
}
</style> 