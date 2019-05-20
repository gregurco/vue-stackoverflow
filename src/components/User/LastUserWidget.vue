<template>
  <div>
    {{ userList }}
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      userList: 'user/getList'
    })
  },
  mounted () {
    this.fetchUsers()
  },
  methods: {
    ...mapActions({
      fetchUsers: 'user/fetch'
    })
  }

}
</script>
