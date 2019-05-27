<template>
  <div>
    {{ element.title }}
    {{ element.body }}
  </div>
</template>
<script>
import {
  mapGetters,
  mapActions
} from 'vuex'
export default {
  props: {
    id: {
      type: [Number, String],
      required: true
    }
  },
  computed: {
    ...mapGetters({
      getById: 'questions/getById',
      list: 'questions/getList'
    }),
    element: function () {
      return this.getById(parseInt(this.id)) || {}
    }

  },

  async mounted () {
    if (!this.getById(parseInt(this.id))) {
      await this.fetchQuestion({
        id: parseInt(this.id)
      })
    }
  },
  methods: {
    ...mapActions({
      fetchQuestion: 'questions/fetch'
    })
  }
}
</script>
