<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <h2>Dashboard</h2>
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
