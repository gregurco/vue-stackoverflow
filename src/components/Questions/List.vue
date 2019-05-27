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
    <div v-if="loading" class="text-xs-center mt-5">
      <v-progress-circular
        :width="1"
        color="red"
        :size="70"
        indeterminate
      />
    </div>

    <div v-for="question in questions" v-else :key="question.id">
      <v-container>
        <v-layout row wrap>
          <v-flex xs2>
            <div>
              <div class="d-block text-xs-center">
                {{ question.score }}
              </div>
              <div class="d-block text-xs-center">
                votes
              </div>
            </div>
            <div class="mt-5">
              <div class="d-block text-xs-center">
                {{ question.answer_count }}
              </div>
              <div class="d-block text-xs-center">
                answers
              </div>
            </div>
            <div class="mt-5 d-block text-xs-center">
              {{ question.view_count }} views
            </div>
          </v-flex>
          <v-flex xs10>
            <div class="title">
              <router-link :to="{name:'question',params:{id:question.id}}">
                {{ question.title }}
              </router-link>
            </div>

            <div class="mt-3">
              {{ question.shortBody }}
            </div>
          </v-flex>
        </v-layout>
      </v-container>
      <!--      <p class="title mt-5">-->
      <!--      </p>-->
      <!--      &lt;!&ndash; eslint-disable vue/no-v-html &ndash;&gt;-->

      <!--      <div v-html="question.body" />-->
      <!--      <hr>-->
      <v-divider />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Home',

  computed: {
    ...mapGetters({
      questions: 'questions/getList',
      loading: 'questions/getLoading'
    })
  },
  created () {
    this.fetch()
  },
  methods: {
    ...mapActions({
      fetch: 'questions/fetch'
    })
  }
}
</script>
