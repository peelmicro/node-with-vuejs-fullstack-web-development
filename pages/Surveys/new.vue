<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h2>Create a new Campaign</h2>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>          
              <v-text-field
                v-model="title"
                :rules="[v => !!v || 'Survey Title is required']"
                label="Survey Title"
                :required="required"
                :readonly="readonly"
              ></v-text-field>
              <v-text-field
                v-model="subject"
                :rules="[v => !!v || 'Subject Line is required']"
                label="Subject Line"
                :required="required"
                :readonly="readonly"
              ></v-text-field>          
              <v-text-field
                v-model="body"
                :rules="[v => !!v || 'Email Body is required']"
                label="Email Body"
                :required="required"
                :readonly="readonly"
              ></v-text-field>          
              <v-text-field
                v-model="recipients"
                :rules="recipientsRules"
                label="Recipient List"
                :required="required"
                :readonly="readonly"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <div class="text-xs-center">
                <v-btn 
                  color="red"
                  class="white--text"
                  to='/surveys'
                  v-show="required"
                >Cancel</v-btn>                
                <v-btn 
                  @click="clear"
                  color="blue lighten-4"
                  class="white--text"
                  v-show="required"
                >Clear</v-btn>
                <v-btn
                  class="white--text"
                  color="teal"                
                  :disabled="!valid"
                  @click="onNext"
                  v-show="required"
                >
                  submit
                </v-btn>
                <v-btn 
                  color="yellow darken-3"
                  class="white--text"
                  @click='onEdit' 
                  v-show="readonly && !loading"
                >Edit</v-btn>
                <v-btn 
                  class="white--text"
                  color="green"
                  :loading="loading"
                  @click='onSendSurvey'
                  v-show="readonly"
                >
                Send Survey
                <v-icon right>email</v-icon>
                </v-btn>                
              </div>
            </v-flex>
          </v-layout>    
        </v-form>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>       
        <v-alert type="error" dismissible v-model="error">
          {{errorMessage}}
        </v-alert>
      </v-flex>
    </v-layout>          
  </v-container>
</template>

<script>
import utils from '../../plugins/utils'
export default {
  data () {
    return {
      title: '',
      subject: '',
      body: '',
      recipients: '',
      required: true,
      readonly: false,
      valid: true,
      recipientsRules: [
        v => !!v || 'Recipient List is required',
        v => this.invalidEmails(v)
      ]
    }
  },
  mixins: [utils],
  methods: {
    clear () {
      this.$refs.form.reset()
    },
    onNext () {
      if (this.$refs.form.validate()) {
        this.required = false
        this.readonly = true
      }
    },
    onEdit () {
      this.required = true
      this.readonly = false
    },
    async onSendSurvey () {
      await this.$store.dispatch('submitSurvey', {
        title: this.title,
        subject: this.subject,
        body: this.body,
        recipients: this.recipients
      })
      if (!this.errorMessage) {
        this.$router.push('/surveys')
      }
    }
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
    }
  }
}
</script>
