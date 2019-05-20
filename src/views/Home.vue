<template>
  <div>
    <v-layout row wrap>
      <v-flex xs6>
        <h1>Questions</h1>
      </v-flex>

      <v-flex xs6 class="text-xs-right">
        <v-btn color="info">
          Ask Question
        </v-btn>
      </v-flex>
    </v-layout>

    <div v-for="question in questions" :key="question.id">
      <!-- eslint-disable vue/no-v-html -->
      <div v-html="question.body" />
      <hr>
    </div>
  </div>
</template>

<script>
import axios from '@/plugins/axios'

export default {
  name: 'Home',
  data () {
    return {
      questions: []
    }
  },
  created () {
    axios.get('/questions?_limit=10')
      .then(({ data }) => {
        this.questions = data
      })
  }
}
</script>

<style scoped>

</style>
