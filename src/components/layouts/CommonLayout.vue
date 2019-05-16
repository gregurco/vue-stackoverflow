<template>
  <div>
    <Header />

    <v-layout row wrap class="mt-4">
      <v-flex xs2>
        <LeftMenu />
      </v-flex>

      <v-flex xs8>
        <router-view />
      </v-flex>

      <v-flex xs2>

      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Header from '@/components/layouts/Header'
import LeftMenu from '@/components/layouts/LeftMenu'

export default {
  name: 'CommonLayout',
  components: { LeftMenu, Header }
}
</script>

<style scoped>

</style>
