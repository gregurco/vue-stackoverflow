<template>
  <div id="common_layout">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'CommonLayout'
}
</script>

<style scoped>
  #common_layout {
    height: 500px;
    background-color: gray;
  }
</style>
