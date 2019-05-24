<template>
  <div>
    <p class="title text-lg-center">
      Users
    </p>
    <v-text-field
      label="Search"
      @input="(q)=>fetchUsers({q})"
    />
    <div v-if="loading" class="text-xs-center mt-5">
      <v-progress-circular
        :width="1"
        color="red"
        :size="70"
        indeterminate
      />
    </div>

    <v-avatar v-for="user in userList" v-else :key="user.id" class="d-inline-flex ma-2" color="indigo">
      <img
        :src="user.profile_image"
        alt="John"
      >
    </v-avatar>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      userList: 'user/getList',
      loading: 'user/getLoading'
    })
  },
  mounted () {
    this.fetchUsers({ _limit: 52 })
  },
  methods: {
    ...mapActions({
      fetchUsers: 'user/fetch'
    })
  }

}
</script>
